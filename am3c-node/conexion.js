const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/am3c";
mongoose.connect(url)
.then(() => {
    console.log("Conexión con la base de datos establecida.");
})
.catch((error) => {
    console.log("Error al conectar con la base de datos: "+error);
});