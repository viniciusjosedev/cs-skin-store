# Build stage
FROM node:20-alpine3.16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Development stage
FROM node:20-alpine3.16 AS dev

WORKDIR /app

COPY --from=build /app /app

EXPOSE 8080

CMD ["npm", "run", "dev"]

# Production stage
FROM node:20-alpine3.16 AS prod

WORKDIR /app

COPY --from=build /app /app

RUN npm ci --only=prod

EXPOSE 8080

CMD ["npm", "start"]
