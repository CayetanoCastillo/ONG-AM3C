const mongoose = require('mongoose');
const contactoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    asunto: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
})

module.exports = contactoSchema;