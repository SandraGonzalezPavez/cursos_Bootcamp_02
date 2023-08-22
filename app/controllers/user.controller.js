const {
    bootcamp,
    usuario
} = require('../models');
const bcrypt = require('bcryptjs');



const findUsuarioPorId = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const user = await usuario.findByPk(usuarioId, {
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'title', 'cue', 'description'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });
        if (!usuario) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado`
            });
            return;
        }
        console.log(`Se ha encontrado el usuario ${JSON.stringify(user, null, 4)}`);
        res.status(200).json({
            message: `usuario ${user.email} fue encontrado con éxito`,
          usuario:user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const findTodosLosUsuarios = async (req, res) => {
    try {
        const users = await usuario.findAll({
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'title', 'cue', 'description'],
                    through: {
                        attributes: []
                    }

                }
            ]
        });
        console.log(`Se han encontrado los usuarios ${JSON.stringify(users, null, 4)}`);
        res.status(200).json({
            message: `se encontraron ${users.length} usuarios`,
            users: users
        });

    } catch (error) {
        console.error(error);
        throw error;
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        // Validar los datos de entrada
        if (!(user.email && user.password && user.firstName && user.lastName && id)) {
            res.status(400).json({ message: 'Todos los campos son requeridos' });
            return;
        }
        const usuarioAct = await usuario.findByPk(id);
        let actualizados = [], actualizado;

        if (usuario) {
            const encryptedPassword = await bcrypt.hash(user.password, 10);
            if ((usuarioAct.firstName !== usuario.firstName) ||
                (usuarioAct.lastName !== usuario.lastName) ||
                (usuarioAct.email !== usuario.email) ||
                (usuarioAct.password !== encryptedPassword)) {
                actualizados = await usuario.update({
                    firstName: usuario.firstName,
                    lastName: usuario.lastName,
                    email: usuario.email,
                    password: encryptedPassword
                }, {
                    where: { id: id }
                });
                actualizado = actualizados[0];
                console.log(`actualizados: ${actualizados}`);
                console.log(`Se ha actualizado el usuario con id ${id}`);
            } else {
                actualizado = -1;
            }
        } else {
            actualizado = 0;
        }
        if (!actualizado) {
            res.status(404).json({
                message: `Usuario id ${id} no fue encontrado`
            });
            return;
        }
        res.status(201).json({
            message: `Usuario id ${id} fue actualizado con éxito`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}
const borrarUsuario = async (req, res) => {
    try {
        const id = req.paramas.id;
        const borrados = await usuario.destroy({
            where: { id }
        });
        console.log(`borrados: ${borrados}`);
        if (!borrados) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado`
            });
            return;
        }
        console.log(`Usuario id ${id} fue borrado con éxito`);

        res.status(201).json({
            message: `usuario id ${id} fue borrado con éxito`
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    findUsuarioPorId,
    findTodosLosUsuarios,
    actualizarUsuario,
    borrarUsuario
}
