#!/bin/bash

# Define the workspace directory
WORKSPACE_BASE=~/Code/gh/alex-crist-com
CONTAINER_NAME=opendevin_alex-crist-com-$(date +%Y%m%d%H%M%S)

# Create the directory if it doesn't exist
mkdir -p $WORKSPACE_BASE

# Run the OpenDevin Docker container
# https://github.com/OpenDevin/OpenDevin?tab=readme-ov-file#-getting-started
docker run -it \
    --pull=always \
    -e SANDBOX_USER_ID=$(id -u) \
    -e PERSIST_SANDBOX="true" \
    -e SSH_PASSWORD="projpass" \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3333:3000 \
    --add-host host.docker.internal:host-gateway \
    --name $CONTAINER_NAME \
    ghcr.io/opendevin/opendevin



