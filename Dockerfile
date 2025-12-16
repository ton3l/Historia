# Stage 1: Build
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
COPY app/api/package.json ./app/api/
COPY app/web/package.json ./app/web/
COPY packages/shared/types/package.json ./packages/shared/types/

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest

WORKDIR /app

COPY --from=builder /app/app/api/dist ./dist

# Atenção aos certificados SSL! 
# Seu código lê 'private.pem' e 'certificate.pem' do __dirname.
# Você precisará copiá-los para a imagem ou usar variáveis de ambiente/volumes.
COPY app/api/src/infrastructure/server/config/*.pem ./dist/

# Define a variável de ambiente se necessário
ENV PORT=3000
ENV NODE_ENV=production

# Expõe a porta
EXPOSE 3000

# Comando de execução (ajustado para o arquivo gerado pelo bun build)
CMD ["bun", "run", "dist/index.js"]