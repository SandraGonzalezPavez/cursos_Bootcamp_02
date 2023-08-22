const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./app/routes/usuario.routes');
const bootcampRouter = require('./app/routes/bootcamp.routes');
const { usuario } = require('./app/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const util = require('util');
const sign = util.promisify(jwt.sign);
const { 
    verifySignUp,
    verifyToken 
} = require('./app/middleware');
const cors = require('cors');
PORT = process.env.PORT;
var corsOpt = {
    origin: '*', 
    optionsSuccessStatus: 200  
}
app.use(cors(corsOpt));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuario', verifyToken);
app.use('/api/usuario', userRouter);
app.use('/api/bootcamp', bootcampRouter);


app.post('/api/signup', verifySignUp, async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const salt = await bcrypt.genSalt(10);
        console.log("Salt generado: " + salt);
        const encryptedPassword = await bcrypt.hash(password, salt);
        console.log("\nPassword encriptado: " + encryptedPassword);
        const user = await usuario.create({
            firstName,
            lastName,
            email: email.toLowerCase(), 
            password: encryptedPassword,
        });
        const token = await sign(
            {
                userId: user.id,
                email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2m",
            }
        );
        console.log("\nToken Generado: " + token);
        res.status(201).json({
            user,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/signin', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (!(email && password)) {
            res.status(400).json({ message: 'Todos los datos son requeridos, email y password' });
            return;
        }
        const user = await usuario.findOne({
            where: {
                email
            }
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = await sign(
                {
                    userId: user.id,
                    email
                },
                process.env.TOKEN_KEY, 
                {
                    expiresIn: "10m",
                }
            );
            console.log("Usuario: " + email + "\nToken: " + token);
            res.status(200).json({
                token,
                message: 'Autenticado'
            });
            return;
        }
        res.status(401).json({ message: 'Credenciales invalidas'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});




app.listen(PORT, () => console.log(`Inicializando en el puerto ${PORT}`));
