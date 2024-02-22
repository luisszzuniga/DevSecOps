FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

RUN chmod +x scripts/init.sh
ENTRYPOINT ["scripts/init.sh"]