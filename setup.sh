#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 project_name"
    exit 1
fi

project_name=$1
project_name_formatted=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

sed -i "s/xprojectname/$project_name/g" README.md
sed -i "s/xprojectname/$project_name_formatted/g" .github/workflows/main.yml
sed -i "s/xprojectname/$project_name_formatted/g" docker-compose.yml
sed -i "s/xprojectname/$project_name_formatted/g" frontend/docker-compose.build.yml
sed -i "s/xprojectname/$project_name_formatted/g" frontend/docker-compose.yml
sed -i "s/xprojectname/$project_name_formatted/g" frontend/README.md
sed -i "s/xprojectname/$project_name_formatted/g" backend/docker-compose.build.yml
sed -i "s/xprojectname/$project_name_formatted/g" backend/docker-compose.yml
sed -i "s/xprojectname/$project_name_formatted/g" backend/README.md