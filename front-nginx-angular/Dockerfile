# Utiliza la imagen base de Nginx
FROM nginxinc/nginx-unprivileged

# Copia el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia los certificados SSL
COPY fullchain.pem /etc/nginx/certs/certificate.crt
COPY privkey.pem /etc/nginx/certs/private.key

# Copia la aplicación compilada de Angular en el directorio de Nginx
COPY ./auth-yt/ /usr/share/nginx/html

# Exponer el puerto
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]