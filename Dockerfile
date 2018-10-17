FROM node:8.12

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 8081
CMD [ "npm", "start" ]
