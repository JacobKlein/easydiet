#!/usr/bin/env bash
source "common.sh"
set -e

cd ${BASE_DIR}
npm run build
cp ${BASE_DIR}/404.html ${BASE_DIR}/docs/404.html

cd "${BASE_DIR}" || exit 1
echoCyan "${BASE_DIR}"
echoCyan "Committing code"
git add -A
git commit -m "Production Build"
git push
