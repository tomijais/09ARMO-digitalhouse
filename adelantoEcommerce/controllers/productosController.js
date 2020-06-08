const fs = require('fs')
const productosPARSE = JSON.parse(fs.readFileSync('C:/Users/Tomas/Documents/09ARMO/adelantoEcommerce/productos.json'))

let productosController = {
    id: function(req,res){
        let idProducto = req.params.id

        res.send(productosPARSE[idProducto]);
    }
}


module.exports = productosController;