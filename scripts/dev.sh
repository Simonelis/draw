#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$ROOT_DIR/app"
PORT="${1:-4173}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required to run the local dev server" >&2
  exit 1
fi

echo "Serving $APP_DIR at http://127.0.0.1:$PORT"
cd "$APP_DIR"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
