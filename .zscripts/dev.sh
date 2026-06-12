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

echo "🚀 Starting Next.js dev server on port $PORT..."
exec npx next dev -p $PORT
