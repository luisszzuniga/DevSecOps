# Utiliser l'image officielle MariaDB
FROM mariadb:10.6

# Copier les fichiers de configuration (si nécessaire)
# COPY my-custom.cnf /etc/mysql/conf.d/

# Copier le script d'initialisation pour créer des utilisateurs
#COPY ./initdb-script.sh ./docker-entrypoint-initdb.d/initdb-script.sh

# Copier le script SQL pour créer la table
#COPY create-database.sql ./docker-entrypoint-initdb.d/create-database.sql

# Exposer le port de MariaDB
EXPOSE 3306

# Définir le volume pour persister les données
VOLUME ["/var/lib/mysql"]

# Utiliser le script de démarrage par défaut de MariaDB
# CMD ["mysqld"]
# CMD ["docker-entrypoint-initdb.sh"]
