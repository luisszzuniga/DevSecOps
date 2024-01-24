#!/bin/sh
set -e

echo "Running migration..."

pnpm run typeorm migration:run
pnpm run build

echo "Migration completed!"

pnpm run start:prod
