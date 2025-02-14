# FROM node:20.3.1-alpine3.17
FROM brayand/fullstack-project-template-frontend:1.0.0 

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build
