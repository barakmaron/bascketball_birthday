FROM node:18-alpine
WORKDIR /client

COPY ./client .

RUN npm install
RUN npm run build

WORKDIR /app

COPY ./server .

RUN npm install
RUN npm install --save mysql2

CMD ["node", "./index.js"]