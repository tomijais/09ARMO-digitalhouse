const express = require("express");
const app = express();
const path = require("path")
const productsRouter = require('./routes/products')

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views/'));

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', productsRouter);