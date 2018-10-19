FROM node:8.12

WORKDIR /app

COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY . .

EXPOSE 8081
CMD [ "npm", "start" ]
