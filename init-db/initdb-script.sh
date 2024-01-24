# #!/bin/bash

# ADMIN_USER="admin"
# ADMIN_PASSWORD="admin_password"
# APP_USER="app_user"
# APP_PASSWORD="app_password"

# # Créer l'utilisateur Admin
# echo "Creating admin user..."
# mysql -u root -p$MYSQL_ROOT_PASSWORD <<-EOSQL
#     CREATE USER '${ADMIN_USER}'@'%' IDENTIFIED BY '${ADMIN_PASSWORD}';
#     GRANT ALL PRIVILEGES ON *.* TO '${ADMIN_USER}'@'%' WITH GRANT OPTION;
#     FLUSH PRIVILEGES;
# EOSQL

# # Créer l'utilisateur Application
# echo "Creating application user..."
# mysql -u root -p$MYSQL_ROOT_PASSWORD <<-EOSQL
#     CREATE USER '${APP_USER}'@'%' IDENTIFIED BY '${APP_PASSWORD}';
#     GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO '${APP_USER}'@'%';
#     FLUSH PRIVILEGES;
# EOSQL

#!/bin/bash
set -e

echo "Running custom initialization scripts..."

# Exécuter le script SQL pour créer la table
mysql < ./create-database.sql
