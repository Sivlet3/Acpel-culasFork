const {Schema, model} = require('mongoose');

<<<<<<< HEAD
const TipoSchema = Schema({
=======
const TipoShema = Schema({
>>>>>>> d576f0e (creacion de frontend, correcciones entre otros)
    nombre: {
        type: String,
        required: [true, "El nombre del tipo es obligatorio"],
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
        require : true,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        require : true,
        default: Date.now
    }
});

<<<<<<< HEAD
module.exports = model("Tipo", TipoSchema);
=======
module.exports = model("Tipo", TipoShema);
>>>>>>> d576f0e (creacion de frontend, correcciones entre otros)
