const fs = require('fs')
const  listaDeHeroes = fs.readFileSync('heroes.json', 'utf-8')
let heroesPARSE = JSON.parse(listaDeHeroes)
let heroesController = {
    index:function(req,res){

        res.send(listaDeHeroes);  
    },
    mostrarDetalle:function(req,res){
         
        let idHeroe = req.params.id;
        if(idHeroe > 0 && idHeroe < heroesPARSE.length){
            res.send(`"Hola, mi nombre es ${heroesPARSE[idHeroe].nombre} y soy ${heroesPARSE[idHeroe].profesion}"​`)
        }else{
            res.send('El id ingresado no coincide con ningun heroe en nuestra base de datos. Por favor intente de nuevo con un id diferente.')
        }

        
    },
    mostrarDetalleConBio:function(req,res){
        let idHeroe = req.params.id;
        let vinoOk = req.params.ok
        if(idHeroe > 0 && idHeroe < heroesPARSE.length && vinoOk === "ok"){
            res.send(`${heroesPARSE[idHeroe].nombre} <br> ${heroesPARSE[idHeroe].resenia}"​`)
        }else if(idHeroe > 0 && idHeroe < heroesPARSE.length){
            res.send('​"Lamento que no desees saber más de mi :(".')
        }else{

           res.send('No encontramos un héroe para mostrarte su biografía')
        }
    },
}


module.exports = heroesController