# Nest

## Installation

Installation avec pnpm (même commande que npm)

```sh
pnpm run install
```

Copier le fichier `.env.example` en `.env` et remplir les informations de connexion à la base de données.

## Lancement

```sh
pnpm run start:dev
```

## Base de données

Base de données en MariaDB, il faut donc avoir un serveur MariaDB de lancé.

### Migrations

Générer une migration

```sh
pnpm run typeorm migration:generate <migration-name>
```

Une fois le fichier créer, déplacer le dans le dossier `src/migrations/`.

Lancer la migration

```sh
pnpm run typeorm migration:run
```

