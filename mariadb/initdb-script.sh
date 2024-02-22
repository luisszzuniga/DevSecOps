#!/bin/bash
set -e

mysql < ./create-users.sql

echo "Running custom initialization scripts..."

# Exécuter le script SQL pour créer la table
mysql < ./create-database.sql
