const mongoose = require('mongoose');
const calendarioSchema = new mongoose.Schema({
    info:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    }
})

module.exports = calendarioSchema;