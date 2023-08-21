const { DataTypes } = require ('sequelize');
const sequelize = require ('../config/db.config');

const bootcamp = sequelize.define('bootcamp', {
    title: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notNull: {
                msg: 'El title es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un title'
            }
        }
    },
    cue: {
        type:DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull: {
              msg:  "El cue es requerido"
            } ,
            notEmpty: {
                msg: 'Debe ingresar un cue'
            }
        }


    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
            notNull: {
                msg: 'El description es requerido'
            },
            notEmpty: {
                msg: 'Debe ingresar un description'
            }
        }
    
    }

});
module.exports = bootcamp;