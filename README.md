# cursos_Bootcamp_02
DESCRIPCIÓN:
El equipo de desarrollo de software ha comenzado un desarrollo para el acceso a datos por medio de una
aplicación realizada por medio de Node.js.
Dicho desarrollo se basó en el diseño de acceso a datos por medio de sequelize y las relaciones
respectivas para la gestión de cursos Bootcamp de una determinada empresa de adiestramiento. El equipo
aplica la metodología scrum y ya realizó el primer Sprint del proyecto que se trató en el diseño e
implementación por medio de Node.js para el registro de cursos Bootcamp y de usuarios de los mismos.
Ahora bien para éste segundo Sprint, se desea adecuar dicho diseño con la finalidad que éste disponible a
través de una API RESTful, para éste nuevo sprint, se agrega a la tabla users el nuevo campo password,
con un mínimo de 8 caracteres de requerimiento, con la finalidad de poder autenticar al usuario.

El requerimiento emitido por la empresa de adiestramiento parte del principio de que los usuarios pueden
participar en distintos bootcamp, y a su vez distintos bootcamp poseen distintos usuarios como se realizó
en el primer sprint .
Para el segundo Sprint se desea la construcción de la API RESTful con Express del bootcamp, soportará el
token basado en la autenticación con JWT(JSONWebToken) y PostgreSQL.
Para la construcción de la API debe contener los siguientes funcionalidades:
• Un usuario de puede registrar en la API
• Un usuario inicia sesión con el email y el password
• Los registros se guardarán en la base de datos PostgreSQL
• Una vez registrado el usuario usuario puede agregar bootcamp
• Puede asignar usuarios a los bootcamp
• La consulta de los bootcamp es pública.

--Crear los siguientes usuarios:

METHOD: POST
url: http://localhost:3000/api/signup

En el body:
{
 "firstName": "Mateo",
    "lastName": "Diaz",
    "email": "mateo.diaz@correo.com",
    "password": "mateo123456" 
}
METHOD: POST
http://localhost:3000/api/signup
En el body:
{
 "firstName": "Santiago",
    "lastName": "Mejias",
    "email": "santiago.mejias@correo.com",
    "password": "santiago123456" 
}
METHOD: POST
http://localhost:3000/api/signup

En el body:
{
 "firstName": "Lucas",
    "lastName": "Rojas",
    "email": "lucas.rojas@correo.com",
    "password": "lucas123456" 
}
METHOD: POST
http://localhost:3000/api/signup

En el body:
{
 "firstName": "Facundo",
    "lastName": "Fernandez",
    "email": "facundo.fernandez@correo.com",
    "password": "facundo123456" 
}

--Crear los siguiente Bootcamps:
method: POST
url: http://localhost:3000/api/bootcamp
body:
{
    "title": "Introduciendo el Bootcamp de React",
    "cue": "10",
    "description": " React es la libreria más usada en Javascript para el desarrollo de interfaces"
}
method: POST
url: http://localhost:3000/api/bootcamp
body:
{
    "title": "Bootcamp de desarrollo Web Full Stack",
    "cue": "12",
    "description": " Crearas aplicaciones web utilizando las tecnologias y lenguajes mas actuales y populares como Javascipt, NodeJS, Angular, MongoDB, ExpressJS"
}
method: POST
url: http://localhost:3000/api/bootcamp
body:
{
    "title": "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
    "cue": "18",
    "description": " Domina Data Science todo el ecosistema de lenguajes y herrramientas Big Data e integrarlos con modelos avanzados de Artificial Intelligence y Machine Learning"
}

Realizar las siguientes consultas con Postman:
● Iniciar sesión de un usuario con email y contraseña:

● Iniciar sesión de un usuario con email y contraseña, con usuario registrado:

● Listar todos los usuarios con sus bootcamp:

● Listar el usuario con el id 3:

● Actualizar el usuario según su id:

● Eliminar un usuario por id:

● Consultando el bootcamp por id, incluyendo los usuarios registrados:

● Listar todos los bootcamp con sus usuarios:

● Consultar un usuario por id incluyendo los bootcamp:

● Gestione adecuadamente el manejo de errores
