#syntax=docker/dockerfile:1

FROM node:18-bullseye

# Set environment variable
ENV NODE_ENV=development

# Set working directory
WORKDIR /usr/src/app

# Install dependencies using cache and bind mount (requires BuildKit)

COPY . .

# Expose port used by the app
EXPOSE 4006

CMD ["npm", "run", "dev"]
