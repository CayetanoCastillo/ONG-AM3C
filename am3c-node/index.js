const express = require('express');
const app = express();
const puerto = 3000;
const mongoose = require('mongoose');
app.get('/', (req, res) => {
    res.sendFile(path.joinb(__dirname, 'index.html'));
});
app.listen(puerto, () => {
    console.log('El servidor está corriendo en el puerto ' + puerto);
});
