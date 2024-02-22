#!/bin/bash
set -e

# Exécuter le script SQL pour créer les utilisateurs
mysql < ./create-users.sql

echo "Running custom initialization scripts..."

# Exécuter le script SQL pour créer la base de données
mysql < ./create-database.sql
