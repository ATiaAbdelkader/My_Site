#!/bin/bash
exec 2>&1
set -e

cd /home/z/my-project

export NEXT_TELEMETRY_DISABLED=1

echo "📦 Installing dependencies..."
bun install

echo "🔧 Generating Prisma client..."
bun run db:generate 2>/dev/null || true

echo "🔨 Building Next.js app (standalone mode)..."
bun run build:standalone

echo "✅ Build complete!"
