const express = require('express');
const app = express();
const calculadoraRouter = require('./routes/calculadora');

app.get('/', function(req, res) {
    res.send("Bienvenide a nuestra página");
});

app.use('/calcular', calculadoraRouter);

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
});