const express = require('express')
const app = express();
const routerProductos = require('./routes/productos')

app.listen(3000, ()=>{
    console.log('El servidor está corriendo en el puerto 3000');
    
})

app.use('/productos', routerProductos);