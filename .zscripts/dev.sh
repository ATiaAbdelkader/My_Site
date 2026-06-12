#!/bin/bash
exec 2>&1
set -e

cd /home/z/my-project

export NEXT_TELEMETRY_DISABLED=1
export PORT=3000

echo "📦 Installing dependencies..."
bun install

echo "🔧 Generating Prisma client..."
bun run db:push 2>/dev/null || true
bun run db:generate

echo "🚀 Starting Next.js dev server..."
exec bun run dev
