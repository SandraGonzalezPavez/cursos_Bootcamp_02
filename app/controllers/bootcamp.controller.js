const {
    bootcamp,
    usuario
} = require('../models');

const createBootcamp = async (req, res) => {
    try {
        const {
            title,
            cue,
            description
        } = req.body;
        // Validar los datos de entrada
        if (!(title && cue && description)) {
            res.status(400).json({ message: 'Todos los campos son requeridos' });
            return;
        }
        const curso = await bootcamp.create({
            title,
            cue,
            description
        });
        console.log(`Se ha creado el proyecto ${JSON.stringify(curso, null, 4)}`);
        res.status(201).json({
            message: `proyecto ${curso.title} fue creado con éxito`,
            bootcamp: curso
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const addUserBootcamp = async (req, res) => {
    try {
        const {
            bootcampId,
            usuarioId
        } = req.body;
        const curso = await bootcamp.findByPk(bootcampId);
        if (!curso) {
            console.log(`No se encontró Bootcamp con id ${bootcampId}`);
            res.status(404).json({
                message: `No se encontró Bootcamp con id ${bootcampId}`
            });
            return;
        }
        console.log('curso:', curso);
        const User = await usuario.findByPk(usuarioId);
        if (!User) {
            console.log(`No se encontró usuario con id ${usuarioId}`);
            res.status(404).json({
                message: `No se encontró usuario con id ${usuarioId}`
            });
            return;
        }
        await curso.addUsuario(User);
        console.log(` El Usuario ${JSON.stringify(usuarioId, null, 4)} ha sido agregado al Bootcamp ${JSON.stringify(curso, null, 4)}`);
        return curso;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const findBootcampId = async (req, res) => {
    try {
        const { id } = req.params;
        const curso = await bootcamp.findByPk(id, {
            include: [
                {
                    model: usuario,
                    as: 'usuario',
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });
        if (!curso) {
            res.status(404).json({
                message: `Bootcamp id ${id} no fue encontrado`
            });
            return;
        }
        console.log(`Se ha encontrado el Bootcamp ${JSON.stringify(curso, null, 4)}`);
        res.status(200).json({
            message: `Bootcamp ${curso.title} fue encontrado con éxito`,
           bootcamp: curso
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const findTodosBootcamp = async (req, res) => {
    try {
        const cursos = await bootcamp.findAll({
            include: [
                {
                    model: usuario,
                    as: 'usuario',
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });
        console.log(`Se han encontrado los Bootcamps ${JSON.stringify(cursos, null, 4)}`);
        res.status(200).json({
            message: `se encontraron ${cursos.length} Bootcamps con éxito`,
            bootcamps: cursos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createBootcamp,
    addUserBootcamp,
    findBootcampId,
    findTodosBootcamp

};


