FROM node:18-bullseye

WORKDIR /app

# Install OpenSSL 1.1 libraries needed by Prisma
RUN apt-get update && apt-get install -y libssl1.1 openssl

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port your service listens on
EXPOSE 4006

# Run migrations on container start, then start your app
CMD npm run migrate && npm run dev
