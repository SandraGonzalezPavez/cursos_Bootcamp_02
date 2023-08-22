const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const usuario = sequelize.define('usuario', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El firstName es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un firstName'
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El lastName es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un lastName'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Debe ingresar un email válido'
            },
            notNull: {
                msg: 'El email es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un email'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El password es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un password'
            }
        }
    }
});

module.exports = usuario;