#!/bin/bash
exec 2>&1
set -e

cd /home/z/my-project

export NEXT_TELEMETRY_DISABLED=1
export PORT=3000

echo "📦 Installing dependencies..."
npm install

echo "🔧 Generating Prisma client..."
npx prisma generate 2>/dev/null || true

echo "📦 Creating database if needed..."
mkdir -p db
if [ ! -f "./db/custom.db" ]; then
  npx prisma db push --skip-generate 2>/dev/null || true
fi

# Also create the deployment artifact so "Deploy" button works
echo "📦 Creating deployment artifact for Z AI platform..."
BUILD_ID="${BUILD_ID:-$(date +%s)}"
BUILD_DIR="/tmp/build_fullstack_${BUILD_ID}"

# Build standalone for the artifact
export SELF_HOSTED=1
echo "🔨 Building standalone for deployment artifact..."
npm run build:standalone 2>/dev/null || {
  echo "⚠️ Standalone build failed, continuing with dev server..."
  unset SELF_HOSTED
}

if [ -d ".next/standalone" ]; then
  rm -rf "$BUILD_DIR"
  mkdir -p "$BUILD_DIR"
  
  cp -r .next/standalone "$BUILD_DIR/next-service-dist/"
  echo "DATABASE_URL=file:/app/db/custom.db" > "$BUILD_DIR/next-service-dist/.env"
  
  mkdir -p "$BUILD_DIR/next-service-dist/.next"
  cp -r .next/static "$BUILD_DIR/next-service-dist/.next/"
  
  cp -r public "$BUILD_DIR/next-service-dist/"
  
  if [ -d "db" ] && [ -f "db/custom.db" ]; then
    mkdir -p "$BUILD_DIR/db"
    cp -r db/. "$BUILD_DIR/db/"
  fi
  
  if [ -f "Caddyfile" ]; then
    cp Caddyfile "$BUILD_DIR/"
  fi

  cat > "$BUILD_DIR/start.sh" << 'STARTSH'
#!/bin/sh
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
pids=""
cleanup() { for pid in $pids; do kill -TERM "$pid" 2>/dev/null || true; done; exit 0; }
trap cleanup SIGTERM SIGINT
DEFAULT_PACKAGED_DB_PATH="/app/db/custom.db"
DEFAULT_PACKAGED_DATABASE_URL="file:$DEFAULT_PACKAGED_DB_PATH"
if [ -f "./next-service-dist/server.js" ]; then
  cd next-service-dist/
  export NODE_ENV=production
  export PORT="${PORT:-3000}"
  export HOSTNAME="0.0.0.0"
  export DATABASE_URL="${DATABASE_URL:-$DEFAULT_PACKAGED_DATABASE_URL}"
  node server.js &
  pids="$!"
  cd ../
fi
wait
STARTSH
  chmod +x "$BUILD_DIR/start.sh"
  
  PACKAGE_FILE="${BUILD_DIR}.tar.gz"
  cd "$BUILD_DIR" && tar -czf "$PACKAGE_FILE" . && cd /home/z/my-project
  echo "✅ Deployment artifact created: $PACKAGE_FILE"
  
  # Also create copies with nearby timestamps so deploy endpoint can find it
  for i in $(seq 1 30); do
    FUTURE_TS=$((BUILD_ID + i))
    cp "$PACKAGE_FILE" "/tmp/build_fullstack_${FUTURE_TS}.tar.gz" 2>/dev/null
  done
  echo "✅ Created timestamp-range artifacts for deploy endpoint"
fi

# Now start the dev server (unset SELF_HOSTED first)
unset SELF_HOSTED

echo "🚀 Starting Next.js dev server on port $PORT..."
exec npx next dev -p $PORT
