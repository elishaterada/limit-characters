FROM node:14-alpine

RUN apk add --no-cache python
RUN apk add --no-cache alpine-sdk
RUN apk add --no-cache bash

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
ADD . /usr/src/app
