FROM node:22-alpine AS base
WORKDIR /app
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps ./apps
COPY packages ./packages
RUN corepack enable && pnpm install --frozen-lockfile

FROM base AS api
WORKDIR /app
EXPOSE 4000
CMD ["pnpm", "--dir", "apps/api", "dev"]

FROM base AS web
WORKDIR /app
EXPOSE 3000
CMD ["pnpm", "--dir", "apps/web", "dev"]
