#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/Users/canhe/Downloads/cursor/HecanDesign"
PORT="8081"
LOG_FILE="/tmp/personal-website.log"

cd "$PROJECT_DIR"

# Kill old server on same port if exists
pkill -f "python3 -m http.server ${PORT}" >/dev/null 2>&1 || true

# Start server in background
python3 -m http.server "$PORT" >"$LOG_FILE" 2>&1 &

# Wait briefly, then open browser
sleep 1

echo "Server started at http://localhost:${PORT}"
echo "Log: ${LOG_FILE}"
echo "Open this URL in Cursor Simple Browser."
