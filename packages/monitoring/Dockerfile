FROM node:12-alpine

RUN npm i -g yarn

WORKDIR /app

COPY package*.json /app
RUN yarn

COPY . .
