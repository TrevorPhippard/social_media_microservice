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

EXPOSE 4002

# On container start: push schema, run seed, then start app
CMD ["sh", "-c", "npx prisma db push && npm run seed && npm run start"]
