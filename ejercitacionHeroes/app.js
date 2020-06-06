const express = require('express')
const app = express();
const routerHeroes = require('./routes/heroes')
const routerIndex = require('./routes/index')

app.listen(3000, ()=>{
    console.log('El servidor está corriendo en el puerto 3000');
    
})

app.use('/', routerIndex);
app.use('/heroes',routerHeroes);
