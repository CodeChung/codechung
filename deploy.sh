#!/bin/bash

export AWS_ACCESS_KEY_ID="AKIAQKKRIHQCSNPQB7TY"
export AWS_SECRET_ACCESS_KEY="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"
export AWS_BUCKET_NAME="codechung"
export AWS_CLOUDFRONT="UPPERCASE"

# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy