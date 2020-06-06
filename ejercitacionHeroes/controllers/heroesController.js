const fs = require('fs')
let heroesController = {
    index:function(req,res){
        let listaDeHeroes = fs.readFileSync('./heroes.json', 'utf-8')
        res.send(listaDeHeroes);  
    },
    mostrarDetalle:function(req,res){
        res.send('ok')
    }

}


module.exports = heroesController