FROM node:16-alpine

RUN npm install -g pnpm

RUN adduser -D appuser
USER appuser

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

# COPY --chown=appuser:appuser .env.example .env
# RUN chmod 777 .env

# ENV PORT=3000
# ENV DB_HOST=mariadb
# ENV DB_PORT=3306
# ENV DB_USERNAME=root
# ENV DB_PASSWORD=root
# ENV DB_DATABASE=devsecops

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start:prod"]