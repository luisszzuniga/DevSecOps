# Utiliser l'image officielle Nginx
FROM nginx:latest

# Installer OpenSSL
RUN apt-get update && apt-get install -y openssl

# Définir le répertoire de travail
WORKDIR /etc/nginx

# Générer un certificat auto-signé
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout cert.key -out cert.pem \
  -subj "/C=FR/ST=Paris/L=Paris/O=Security/OU=IT Department/CN=example.com"

# Copier la configuration Nginx (assurez-vous que nginx.conf est dans le même répertoire que ce Dockerfile)
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer les ports (HTTP et HTTPS)
EXPOSE 80 443
