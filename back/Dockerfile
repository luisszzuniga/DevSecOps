# Utilisez une image Node.js comme image de base
FROM node:17-alpine
# Installez pnpm globalement
RUN npm install -g pnpm

# Créez un répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et pnpm-lock.yaml dans le répertoire de travail
COPY package.json pnpm-lock.yaml ./

# Installez les dépendances de l'application avec pnpm
RUN pnpm install

# Effectuez la migration de la base de données
RUN pnpm typeorm migration:run

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application NestJS s'exécutera
EXPOSE 3000

# Commande pour démarrer l'application en mode production
CMD ["pnpm", "run", "start:dev"]