FROM node:8.12

WORKDIR /app

COPY package*.json ./

RUN npm config set strict-ssl=false
RUN npm install

COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]
