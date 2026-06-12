#!/bin/bash
cd /home/z/my-project

# Install deps if needed
if [ ! -d "node_modules" ]; then
  bun install
fi

# Setup database
bun run db:push 2>/dev/null || true

# Start dev server (this runs under the boot script's subshell)
exec bun run dev
