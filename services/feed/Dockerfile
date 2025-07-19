FROM node:18-bullseye



WORKDIR /app
COPY . .

RUN npm install

EXPOSE 6379

CMD ["npm", "run", "dev"]
