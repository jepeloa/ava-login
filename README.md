# Deploy 
ir a la carpeta front-nginx-angular y ejecutar docker compose up -d --build

La carppeta auth-yt tiene todo el codigo fuente de la aplicacion compilalada

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

#modificacion de credenciales para firebase
Estos certificadosd estan dentro del archivo enviroment.ts de el codigo fuente de angular. Se debe generar para el usuario correspondiente y reemplazar, luego compilar y deploy




# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)