FROM node:18-bullseye

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and Prisma schema
COPY . .

# Generate Prisma client (important)
RUN npx prisma generate

# Compile TypeScript to JavaScript (creates dist/)
RUN npm run build

EXPOSE 4003

# Push Prisma schema to database and start the built app
CMD ["sh", "-c", "npx prisma db push && npm run seed && npm run start"]
