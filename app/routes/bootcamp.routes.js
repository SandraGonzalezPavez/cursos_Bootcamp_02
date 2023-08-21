const express =require('express');
const router = express.Router();

const {
    createBootcamp,
    addUserBootcamp,
    findBootcampId,
    findTodosBootcamp
} = require('../controllers/bootcamp.controller');

const { verifyToken } = require('../middleware');
const { bootcamp } = require('../models');

// Listar todos los Bootcamps con sus usuarios
router.get('/', findTodosBootcamp);

// desde aqui ocuparemos la seguridad a través del token
router.use('/', verifyToken);

//Crear un nuevo bootcamp
router.post('/', createBootcamp);

// Insertar usuarios en los bootcamps
router.post('/addusuario', addUserBootcamp);

// Consultar bootcamps por id con sus usuarios
router.get('/:id', findBootcampId);



module.exports = router;




