# Utilizamos una imagen base ligera de Nginx
FROM nginx:alpine

# Copiamos el contenido de la carpeta `src` al directorio HTML de Nginx
COPY src /usr/share/nginx/html

# Exponemos el puerto 80 para que Nginx sirva la aplicación
EXPOSE 80

# No necesitamos comandos adicionales ya que Nginx se iniciará automáticamente
