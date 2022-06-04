# Desafio Abracadabra
## Requerimientos

1. Crear un servidor con Express en el puerto 3000.
2. Definir la carpeta “assets” como carpeta pública del servidor.
3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de
la ruta /abracadabra/usuarios.
4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el
usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado
en el servidor.
En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario
devolver la imagen “who.jpeg”.
5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el
número generado de forma aleatoria.
En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la
imagen de Voldemort.
6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...”
al consultar una ruta que no esté definida en el servidor.
