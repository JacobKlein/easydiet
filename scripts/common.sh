#!/usr/bin/env bash

BASE_DIR=${DEV_ROOT}/easydiet
# ============================================================================================================= #
BLUE='\033[0;34m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[0;33m'
RESET='\033[0m'
# ============================================================================================================= #
echoBlue() {
  echo -e "${BLUE}${1}${RESET}"
}
echoCyan() {
  echo -e "${CYAN}${1}${RESET}"
}
echoYellow() {
  echo -e "${YELLOW}${1}${RESET}"
}
echoGreen() {
  echo -e "${GREEN}${1}${RESET}"
}
