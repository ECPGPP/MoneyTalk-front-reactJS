FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /app
COPY ./app .

RUN npm install --silent

ENV NODE_ENV production

EXPOSE 3000
CMD [ "npm", "start"]

