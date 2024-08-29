# Deploy 
ir a la carpeta front-nginx-angular y ejecutar docker compose up -d --build

La carppeta auth-yt tiene todo el codigo fuente de la aplicacion compilada

# Modificacion y compilacion
ir a la carpeta front-angular-source/auth-firebase

Dentro de esa carpeta esta todo el codigo de la aplicacion

para instalar 

npm install

luego  live server:

npm start

para el deploy

npm buil --prod

Dentro de la carpeta dist se genera la carpeta auth-yt que es la que contiene la aplicacion compilada. Para el deplot se debe reemplazar por la que esta dentro de front-nginx-angular


# Certificados

los certificados se generaron con cerbot, son fullchain.pem y privkey.pem

# modificacion de credenciales para firebase
Estos certificadosd estan dentro del archivo enviroment.ts de el codigo fuente de angular. Se debe generar para el usuario correspondiente y reemplazar, luego compilar y deploy




