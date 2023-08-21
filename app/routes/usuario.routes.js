const express =require('express');
const router = express.Router();

const {
    findUsuarioPorId,
    findTodosLosUsuarios,
    actualizarUsuario,
    borrarUsuario
} = require('../controllers/user.controller');

//Listar todos los usuarios
router.get('/', findTodosLosUsuarios);

// Consultar por usuarios con id, incluyendo los Bootcamps
router.get('/:id', findUsuarioPorId);

//Actualizar un usuario por id
router.put('/:id', actualizarUsuario);

// Eliminar un usuario por id
router.delete('/:id', borrarUsuario);

module.exports = router;

