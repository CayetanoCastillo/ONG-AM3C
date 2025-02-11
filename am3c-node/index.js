const express = require ('express');
const path = require("path");
const cors = require("cors");
const puerto = 8080;
const app = express();
const userSchema = require('./schemas/Socia');
const mongooseCon = require ('./functions/conexion');
const mongoose = require("mongoose");
const Usuario = mongoose.model("Socia", userSchema);
console.log(userSchema);



app.get('/', (req, res) => {
    res.sendFile(path.joinb(__dirname, 'index.html'));
});
app.listen(puerto, () => {
    console.log('El servidor está corriendo en el puerto ' + puerto);
});

app.post("/HazteSocia", (req, res) => {
    console.log(req.body);
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        apellido2: req.body.apellido2,
        dni: req.body.dni,
        domicilo: req.body.domicilio,
        correo: req.body.correo,
        telefono: req.body.telefono,
        
    })
    nuevoUsuario.save()
    .then((usuario) => {
        console.log("Socia creada correctamente: "+usuario)
    })
    res.send("Socia creada correctamente.");
})

app.post("/contacto", (req, res) => {
    console.log(req.body);
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        asunto: req.body.asunto,
        mensaje: req.body.mensaje,
        
    })
    nuevoUsuario.save()
    .then((usuario) => {
        console.log("Socia creada correctamente: "+usuario)
    })
    res.send("Socia creada correctamente.");
})