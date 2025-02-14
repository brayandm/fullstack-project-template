#!/bin/bash

set -e

pushd backend/
docker compose -f docker-compose.build.yml build --compress --force-rm --no-cache --parallel --pull
popd

pushd frontend/
docker compose -f docker-compose.build.yml build --compress --force-rm --no-cache --parallel --pull
popd