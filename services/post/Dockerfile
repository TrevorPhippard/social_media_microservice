FROM node:18-bullseye



WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "run", "dev"]
