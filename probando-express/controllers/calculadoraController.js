let calculadoraController = {
    hola: function(req, res) {
        res.send("Esta es la calculadora!")
    },
    sumar: function(req, res) {
        res.send(req.params);
        res.send("El resultado es " + (Number(req.params.n1) + Number(req.params.n2)))
    },
    multiplicar: function(req, res) {
        res.send("El resultado es " + (Number(req.params.n1) * Number(req.params.n2)))
    },
}

module.exports = calculadoraController;