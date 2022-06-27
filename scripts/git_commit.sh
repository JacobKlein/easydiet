#!/usr/bin/env bash
source "common.sh"
set -e


cd "${BASE_DIR}" || exit 1
echoCyan "${BASE_DIR}"
echoCyan "Committing code"
git add -A
git commit -m "WIP"
git push
