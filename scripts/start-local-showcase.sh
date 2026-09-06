#!/usr/bin/env bash
set -euo pipefail
portfolio_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
projects_root="${PROJECTS_ROOT:-$(cd -- "$portfolio_root/../.." && pwd)/projects}"
docker info >/dev/null
for repo in bits-social phishing-detection kubernetes-verifier; do
  if [[ ! -d "$projects_root/$repo" ]]; then
    echo "Missing $projects_root/$repo. Set PROJECTS_ROOT to the directory containing the project checkouts." >&2
    exit 1
  fi
done
docker compose -f "$portfolio_root/compose.yaml" up -d
docker compose -f "$projects_root/bits-social/compose.yaml" up -d
docker compose -f "$projects_root/phishing-detection/compose.yaml" up -d
docker compose -f "$projects_root/kubernetes-verifier/compose.demo.yaml" up -d
printf '\nPortfolio: http://localhost:3000\nBITS Social: http://localhost:3101\nPhishScope: http://localhost:3102\nImage Trust Desk: http://localhost:3104\n'
