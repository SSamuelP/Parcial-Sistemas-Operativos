# Usa una imagen base de Node.js
FROM node:16

# Crea un directorio para la aplicación
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json si lo tienes
COPY package*.json ./

# Instala las dependencias de npm
RUN npm install

# Luego copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
