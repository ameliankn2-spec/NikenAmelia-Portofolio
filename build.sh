#!/bin/bash
# Vercel build script untuk portfolio

cd artifacts/portfolio

# Install dependencies dari root
cd ../../
pnpm install
cd artifacts/portfolio

# Build portfolio
PORT=3000 BASE_PATH=/ pnpm run build
