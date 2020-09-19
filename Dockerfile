FROM node:12.12.0-alpine

WORKDIR /usr/src/contact-app

RUN apk update && \
    npm install -g npm @vue/cli
