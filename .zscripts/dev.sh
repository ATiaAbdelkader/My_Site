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

echo "🚀 Starting Next.js dev server..."
exec npx next dev -p 3000
