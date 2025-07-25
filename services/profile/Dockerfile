#syntax=docker/dockerfile:1

FROM node:18-bullseye


# Set environment variable
ENV NODE_ENV=development

# Set working directory
WORKDIR /usr/src/app

# Install dependencies using cache and bind mount (requires BuildKit)
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci --include=dev

# Copy source code and Prisma schema
COPY . .

# Generate Prisma client (important)
RUN npx prisma generate

# Compile TypeScript to JavaScript (creates dist/)
RUN npm run build

# Expose port used by the app
EXPOSE 4002

# On container start: push schema, run seed, then start app
CMD ["sh", "-c", "npx prisma db push && echo 'Pushed schema' && npm run seed && echo 'Seed ran' && npm run start"]
