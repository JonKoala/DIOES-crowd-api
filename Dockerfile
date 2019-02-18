FROM node:8.12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY . .

ARG DIARIOBOT_API_PORT
EXPOSE $DIARIOBOT_API_PORT

CMD [ "npm", "start" ]
