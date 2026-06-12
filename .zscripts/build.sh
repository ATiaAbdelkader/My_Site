#!/bin/bash
exec 2>&1
set -e

cd /home/z/my-project

export NEXT_TELEMETRY_DISABLED=1
# Use BUILD_ID from environment (set by Z AI platform) or fallback to timestamp
export BUILD_ID="${BUILD_ID:-$(date +%s)}"
BUILD_DIR="/tmp/build_fullstack_${BUILD_ID}"

echo "📦 Installing dependencies..."
npm install

echo "🔧 Generating Prisma client..."
npx prisma generate 2>/dev/null || true

echo "🔨 Building Next.js app (standalone mode)..."
export SELF_HOSTED=1
npm run build:standalone

echo "📦 Creating deployment artifact..."

# Clean previous build dir
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# Copy standalone server
if [ -d ".next/standalone" ]; then
  echo "  - Copying standalone server..."
  cp -r .next/standalone "$BUILD_DIR/next-service-dist/"
  # Fix DATABASE_URL in standalone .env to use deployed container path
  echo "DATABASE_URL=file:/app/db/custom.db" > "$BUILD_DIR/next-service-dist/.env"
fi

# Copy static files
if [ -d ".next/static" ]; then
  echo "  - Copying static files..."
  mkdir -p "$BUILD_DIR/next-service-dist/.next"
  cp -r .next/static "$BUILD_DIR/next-service-dist/.next/"
fi

# Copy public directory
if [ -d "public" ]; then
  echo "  - Copying public directory..."
  cp -r public "$BUILD_DIR/next-service-dist/"
fi

# Copy and prepare database
if [ -d "db" ] && [ -f "db/custom.db" ]; then
  echo "  - Copying database..."
  mkdir -p "$BUILD_DIR/db"
  cp -r db/. "$BUILD_DIR/db/"
elif [ -f "prisma/schema.prisma" ]; then
  echo "  - Creating database from schema..."
  mkdir -p "$BUILD_DIR/db"
  npx prisma db push --skip-generate 2>/dev/null || true
  if [ -f "db/custom.db" ]; then
    cp -r db/. "$BUILD_DIR/db/"
  fi
fi

# Copy Caddyfile
if [ -f "Caddyfile" ]; then
  echo "  - Copying Caddyfile..."
  cp Caddyfile "$BUILD_DIR/"
fi

# Create start.sh for production deployment
cat > "$BUILD_DIR/start.sh" << 'STARTSH'
#!/bin/sh
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

pids=""

cleanup() {
  echo "Shutting down..."
  for pid in $pids; do
    kill -TERM "$pid" 2>/dev/null || true
  done
  exit 0
}
trap cleanup SIGTERM SIGINT

DEFAULT_PACKAGED_DB_PATH="/app/db/custom.db"
DEFAULT_PACKAGED_DATABASE_URL="file:$DEFAULT_PACKAGED_DB_PATH"

if [ -f "./next-service-dist/server.js" ]; then
  echo "Starting Next.js production server..."
  cd next-service-dist/
  export NODE_ENV=production
  export PORT="${PORT:-3000}"
  export HOSTNAME="0.0.0.0"
  export DATABASE_URL="${DATABASE_URL:-$DEFAULT_PACKAGED_DATABASE_URL}"

  if [ "$DATABASE_URL" = "$DEFAULT_PACKAGED_DATABASE_URL" ]; then
    if [ ! -f "$DEFAULT_PACKAGED_DB_PATH" ]; then
      echo "Warning: Packaged database not found at $DEFAULT_PACKAGED_DB_PATH"
    else
      echo "Using packaged database: $DEFAULT_PACKAGED_DB_PATH"
    fi
  fi

  node server.js &
  NEXT_PID=$!
  pids="$NEXT_PID"
  echo "Next.js server started (PID: $NEXT_PID, Port: $PORT)"
  cd ../
fi

echo "All services started!"
wait
STARTSH
chmod +x "$BUILD_DIR/start.sh"

# Package as tarball
PACKAGE_FILE="${BUILD_DIR}.tar.gz"
echo "📦 Packaging to $PACKAGE_FILE..."
cd "$BUILD_DIR"
tar -czf "$PACKAGE_FILE" .
cd /home/z/my-project

echo "✅ Build complete! Artifact: $PACKAGE_FILE"
echo "📊 Package size: $(ls -lh "$PACKAGE_FILE" | awk '{print $5}')"
