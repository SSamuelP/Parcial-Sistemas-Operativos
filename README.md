# **Parcial Segundo Corte**
## **Integrantes:**
- Selene Belalcazar Muñoz
- Samuel Santiago Pinzón Reina
- Andrés Felipe Londoño Mendieta

Para instalar este repositorio hay que seguir los siguientes pasos:
```bash
git clone https://github.com/SSamuelP/Parcial-Sistemas-Operativos.git
cd Parcial-Sistemas-Operativos
```

Este es un repositorio el cual corresponde al segundo parcial de la asignatura Sistemas Operativos, para el cual hemos hecho tres proyectos en lenguaje HTML5, CSS, JS. Profundizaremos más en ello en el siguiente texto:
- Programa I: Este es un programa para crear y eliminar notas personales, las cuales pueden servir como pequeños recordatorios. Para ejecutarlo seguiremos estos pasos:
  1. Paso 1: Nos moveremos al directorio donde está el programa:
  ```bash
  cd "Programa I"
  cd simple-node-react
  ```
  2. Paso 2: Vamos a construir los contenedores con el programa:
    ```bash
    docker-compose build
    ```
  3. Paso 3: Empezamos a ejecutar el contenedor:
    ```bash
    docker-compose up
    ```
  4. Paso 4: Si el proyecto se ejecutó de manera correcta, en la dirección ```localhost:5000``` se estará ejecutando la aplicación de notas.
  5. Paso 5: Para detener el programa hay que presionar ```CTRL + C``` en la consola, y automaticamente se cerraran los puertos y ya no será visible el proyecto.

- Programa II: Este es un programa un poco relacionado al entretenimiento y arte, el cual consiste en un canvas virtual, en donde se puede dinujar en la página presionando click derecho con el mouse, los pasos para ejecutarlo desde la carpeta root del repositorio son:
  1. Paso 1: Movernos de directorio:
     ```bash
     cd "Programa II"
     ```
  2. Paso 2: Ahora sí, para ejecutar el programa tenemos que escribir el siguiente comando:
     ```bash
     docker  run -p 3000:3000 ssmauelp/canvas-app
     ```
  3. Paso 3: Para detener el programa, abrimos una nueva consola y ejecutaremos el siguiente comando:
     ```wsl
     docker stop $(docker ps -q)
     ```
     Y automaticamente se detedrán todos los contenedores que estén activos. Se pone estaa solución  dado que el id del contenedor no sabremos si será la misma que obtuvimos en el equipo desde donde se ejecutó. En caso de que lo conozcas, ejecuta el siguiente cómando:
     ```wsl
     docker stop <id_del_contenedor>
     ```
- Proograma III: Este es un programa básico en la cual se ejecuta una página básica, los pasos para ejecutarla son:
    1. Paso 1: Nos movemos al directorio del ejercicio:
    ```bash
    cd "Programa III"
    cd my-web-app
    ```
    2. Paso 2: Vamos a construir los contenedores con el programa:
      ```bash
      docker-compose build
      ```
    3. Paso 3: Empezamos a ejecutar el contenedor:
      ```bash
      docker-compose up
      ```
    4. Paso 4: Si no hay errores durante la compilación, podremos ver la aplicación en la dirección ```localhost:8080```
    5. Paso 5: Para detener el programa hay que presionar ```CTRL + C``` en la consola, y automaticamente se cerraran los puertos y ya no será visible el proyecto.
   
Y esos fueron los 3 deploys que realizamos con el uso de herramientas como Docker y Kubernetes.
