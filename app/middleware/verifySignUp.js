const { usuario } = require('../models');

const verifySignUp = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;       
        if (!(email && password && firstName && lastName)) {
            res.status(400).json({ message: 'Todos los campos son requeridos' });
            return;
        }
        if (password.length < 8) {
            res.status(400).json({ message: 'El password debe tener mínimo 8 caracteres'});
            return;
        }
        try {
            const {
                email
            } = req.body;
            const oldUsuario = await usuario.findOne({
                where: {
                    email
                }
            });
            if (oldUsuario) {
                console.log(`Se ha encontrado el usuario ${JSON.stringify(oldUsuario, null, 4)}`);
                res.status(409).json({
                    message: `usuario ${oldUsuario.email} existe, inicie login en http://localhost:${process.env.PORT}/login`,
                });
                return;
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
            return;
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
        return;
    }
}

module.exports = verifySignUp;