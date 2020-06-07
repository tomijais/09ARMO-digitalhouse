const fs = require('fs')
const  listaDeHeroes = fs.readFileSync(
    'C:/Users/Tomas/Documents/09ARMO/ejercitacionHeroes/heroes.json', 'utf-8')
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
        res.send('ok')
    },
}


module.exports = heroesController