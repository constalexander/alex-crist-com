#!/bin/bash

export WORKSPACE_BASE=~/Code/gh/alex-crist-portfolio
export CONTAINER_NAME=openhands_alex-crist-portfolio-$(date +%Y%m%d%H%M%S)

mkdir -p $WORKSPACE_BASE

# Run the OpenHands Docker container
# https://docs.all-hands.dev/modules/usage/installation
docker pull ghcr.io/all-hands-ai/runtime:0.9-nikolaik
docker run -it --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=ghcr.io/all-hands-ai/runtime:0.9-nikolaik \
    -e SANDBOX_USER_ID=$(id -u) \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3333:3000 \
    --add-host host.docker.internal:host-gateway \
    --name $CONTAINER_NAME \
    ghcr.io/all-hands-ai/openhands:0.9