FROM node:8-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN yarn

COPY . .

CMD ["yarn", "start"]