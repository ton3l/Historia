# 📚 Historia

Bem-vindo ao **Historia**! 👋

Este é um projeto pessoal de gerenciamento de tarefas e quadros estilo Kanban, desenvolvido com foco em performance, arquitetura limpa e tecnologias modernas do ecossistema JavaScript/TypeScript.

O objetivo do Historia é fornecer uma interface simples e intuitiva para organizar projetos, listas e tarefas, permitindo que você visualize seu progresso de forma eficiente.

## 🚀 Tecnologias Utilizadas

O projeto é um **Monorepo** gerenciado com **Bun Workspaces**, garantindo rapidez na instalação e execução.

### 🎨 Frontend (`app/web`)
Uma aplicação Single Page Application (SPA) moderna e reativa:
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Roteamento:** [TanStack Router](https://tanstack.com/router) (Type-safe routing)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Http Client:** Axios

### ⚙️ Backend (`app/api`)
Uma API robusta construída seguindo princípios de **Domain-Driven Design (DDD)**:
- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Express.js v5](https://expressjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Segurança:** Argon2 (Hashing de senhas) & JWT (Autenticação)
- **Validação:** Zod

### 📦 Shared (`packages/shared`)
- Tipos TypeScript compartilhados entre o frontend e backend para garantir consistência de contratos de dados (Type Safety end-to-end).

## 🏗️ Arquitetura

O backend foi desenhado com uma separação clara de responsabilidades, inspirada na **Clean Architecture**:

- **Domain:** Contém as Entidades (`User`, `Board`, `List`, `Task`) e regras de negócio puras.
- **Application:** Casos de uso da aplicação (ex: `CreateBoard`, `LogIn`).
- **Infrastructure:** Implementações concretas (Repositórios Prisma, Encryptors, Controllers Express).

## ✨ Funcionalidades Principais

- **Autenticação Segura:** Criação de conta e login com criptografia forte.
- **Gerenciamento de Quadros:** Crie múltiplos quadros para diferentes projetos.
- **Listas e Tarefas:** Organize seu fluxo de trabalho criando listas e adicionando tarefas a elas.
- **Interface Moderna:** Design limpo e responsivo.

## 🛠️ Como Rodar o Projeto

Pré-requisito: Ter o [Bun](https://bun.sh/) instalado.

1. **Instale as dependências:**
   ```bash
   bun install
   ```

2. **Inicie o servidor de desenvolvimento (API):**
   ```bash
   cd app/api
   bun dev
   ```

3. **Inicie o frontend:**
   ```bash
   cd app/web
   bun dev
   ```

---
*Este projeto foi desenvolvido com ❤️ para fins de aprendizado e portfólio.*