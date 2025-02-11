const mongoose = require('mongoose');
const sociaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    apellido2:{
        type: String,
        required: false
    },
    dni:{
        type: String,
        required: true
    },
    domicilio:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    }
})

module.exports = sociaSchema;