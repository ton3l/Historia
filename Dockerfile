FROM oven/bun:latest

WORKDIR /app

# 1. Copia os arquivos de dependência
COPY package.json bun.lock ./
COPY app/api/package.json ./app/api/
COPY app/web/package.json ./app/web/
# Se tiver packages compartilhados, copie também
COPY packages/shared/types/package.json ./packages/shared/types/

# 2. Instala APENAS dependências de produção (baixa Prisma/Argon2 versão Linux)
RUN bun install --production

# 3. Copia a pasta dist que você buildou no Windows (Backend + Frontend estático)
COPY app/api/dist ./dist

# 4. Gera o cliente do Prisma (necessário para o binário Linux)
COPY app/api/prisma ./app/api/prisma
RUN cd app/api && bunx prisma generate

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", "dist/index.js"]