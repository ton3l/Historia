FROM oven/bun:latest AS builder
WORKDIR /app

COPY package.json bun.lock ./
COPY app/api/package.json ./app/api/
COPY app/web/package.json ./app/web/
COPY packages/shared/types/package.json ./packages/shared/types/

RUN bun install

COPY . .

RUN bunx prisma generate --schema=./app/api/prisma/schema.prisma

RUN bun run build

FROM oven/bun:latest
WORKDIR /app

COPY package.json bun.lock ./
COPY app/api/package.json ./app/api/
COPY app/web/package.json ./app/web/
COPY packages/shared/types/package.json ./packages/shared/types/

RUN bun install --production

COPY --from=builder /app/app/api/dist ./dist

COPY --from=builder /app/app/api/src/generated/client/*.node ./dist/query_engine.node

ENV PRISMA_QUERY_ENGINE_LIBRARY="/app/dist/query_engine.node"

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["bun", "run", "dist/index.js"]