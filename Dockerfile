FROM node:20-alpine

WORKDIR /app
COPY ./app .

RUN npm install --silent

ENV NODE_ENV production

EXPOSE 3000
CMD [ "npm", "start"]

