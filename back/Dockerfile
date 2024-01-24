FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

COPY .env.example .env
ENV PORT=3000
ENV DB_HOST=mariadb
ENV DB_PORT=3306
ENV DB_USERNAME=root
ENV DB_PASSWORD=root
ENV DB_DATABASE=devsecops

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

RUN chmod +x scripts/init.sh
ENTRYPOINT ["scripts/init.sh"]
