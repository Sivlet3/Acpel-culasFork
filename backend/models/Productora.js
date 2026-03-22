const {Schema, model} = require('mongoose');

const ProductoraSchema = Schema({
<<<<<<< HEAD
    nombreProductora: {
=======
    nombre: {
>>>>>>> d576f0e (creacion de frontend, correcciones entre otros)
        type: String,
        required: [true, "El nombre de la productora es obligatorio"],
        unique: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        enum: ["activo", "inactivo"],
        default: "activo"
    },
    descripcion: {
        type: String,
        trim: true
    },
    fechaCreacion: {
        type: Date,
<<<<<<< HEAD
        required : true,
=======
        require : true,
>>>>>>> d576f0e (creacion de frontend, correcciones entre otros)
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
<<<<<<< HEAD
        required : true,
        default: Date.now
    },
    slogan: {
        type: String,
        trim: true
=======
        require : true,
        default: Date.now
>>>>>>> d576f0e (creacion de frontend, correcciones entre otros)
    }
});

module.exports = model("Productora", ProductoraSchema);