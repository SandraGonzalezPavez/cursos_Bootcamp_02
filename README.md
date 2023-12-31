# cursos_Bootcamp_02
url Git : https://github.com/SandraGonzalezPavez/cursos_Bootcamp_02.git

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
method: POST
url: http://localhost:3000/api/signin
body:
{
    "email": "sandra.gonzalez@correo.com",
    "password": "sandryta"
}

● Iniciar sesión de un usuario con email y contraseña, con usuario registrado:
Method:POST
url: http://localhost:3000/api/signin
body:
{
"email": "mateo.diaz@correo.com",
    "password": "mateo123456"
}

-- Agregar los usuarios a los Bootcamp:
method:POST
url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 1,
    "usuarioId" : 1
    }
url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 1,
    "usuarioId" : 2
    }
    url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 2,
    "usuarioId" : 1
    }
    url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 3,
    "usuarioId" : 1
    }
    url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 3,
    "usuarioId" : 2
    }
    url : http://localhost:3000/api/bootcamp/addusuario
BODY:
{
 "bootcampId" : 3,
    "usuarioId" : 3
    }
● Listar todos los usuarios con sus bootcamp:
method: GET
http://localhost:3000/api/usuario

● Listar el usuario con el id 3:
method: GET
http://localhost:3000/api/usuario/3

● Actualizar el usuario según su id:
method: PUT
http://localhost:3000/api/usuario/1

● Eliminar un usuario por id:
http://localhost:3000/api/usuario/1

● Consultando el bootcamp por id, incluyendo los usuarios registrados:
method: GET
http://localhost:3000/api/bootcamp/3

● Listar todos los bootcamp con sus usuarios:
method: GET
http://localhost:3000/api/bootcamp

● Consultar un usuario por id incluyendo los bootcamp:
method: GET
http://localhost:3000/api/usuario/2

● Gestione adecuadamente el manejo de errores
