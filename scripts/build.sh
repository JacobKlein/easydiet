#!/usr/bin/env bash
source "common.sh"
set -e

#cd ${BASE_DIR}
#npm run build
#cp ${BASE_DIR}/404.html ${BASE_DIR}/docs/404.html

#===================== Legacy =======================#
cd ${BASE_DIR}
rm -rf docs
mkdir docs
echo "${BASE_DIR}/legacy"
cp -r ${BASE_DIR}/legacy/. ${BASE_DIR}/docs/

#=============== Commit ====================#

cd "${BASE_DIR}" || exit 1
echoCyan "${BASE_DIR}"
echoCyan "Committing code"
git add -A
git commit -m "Production Build"
git push
