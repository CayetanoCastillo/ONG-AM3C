const express = require ('express');
const path = require("path");
const cors = require("cors");
const puerto = 8080;
const app = express();
const userSchema = require('./schemas/Usuario');
const mongooseCon = require ('./functions/conexion');
const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario", userSchema);
console.log(userSchema);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "contacto.html"));
})

app.post("/insertarUsuario", (req, res) => {
    console.log(req.body);
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        apellido2: req.body.apellido2,
        edad: req.body.edad,
        correo: req.body.correo,
        contrasenia: req.body.pass
    })
    nuevoUsuario.save()
    .then((usuario) => {
        console.log("Usuario creado correctamente: "+usuario)
    })
    res.send("Usuario creado correctamente.");
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
})

app.listen(puerto, () => {
    console.log(`El servidor ha arrancado en el puerto ${puerto}`)
    console.log("El servidor ha arrancado en el puerto "+puerto)
});
