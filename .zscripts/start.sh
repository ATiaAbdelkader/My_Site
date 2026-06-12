#!/bin/bash
exec 2>&1
set -e

cd /home/z/my-project

export NODE_ENV=production
export PORT=3000
export HOSTNAME=0.0.0.0

# Set DATABASE_URL if not set
if [ -z "$DATABASE_URL" ]; then
  export DATABASE_URL="file:./db/custom.db"
fi

# Ensure database exists for Prisma
if [ ! -f "./db/custom.db" ]; then
  echo "📦 Creating database..."
  mkdir -p db
  npx prisma db push --skip-generate 2>/dev/null || true
fi

echo "🚀 Starting Next.js production server on port $PORT..."
exec npx next start -p $PORT
