FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y nginx openssl && \
    mkdir -p /etc/nginx/ssl /var/run/nginx /var/log/nginx && \
    chown -R www-data:www-data /var/log/nginx

COPY nginx.conf /etc/nginx/nginx.conf

# DOMAIN_NAME is empty but it works now, can fix later 
RUN openssl req -newkey rsa:4096 -x509 -sha256 -days 365 -nodes \
    -out /etc/nginx/ssl/cert.pem \
    -keyout /etc/nginx/ssl/key.pem \
    -subj "/CN=${DOMAIN_NAME}"

EXPOSE 443
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]