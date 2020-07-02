const fs = require('fs')
const path =require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf-8'))

let inSale = products.filter(function(elemento){
    return elemento.category === "in-sale"
})

let visited = products.filter(function(elemento){
    return elemento.category === "visited"
})

let productsController = {
    index: function(req,res){
        res.render('index',{
            inSale:inSale,
            visited:visited
        });
    }
}


module.exports = productsController;