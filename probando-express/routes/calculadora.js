const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController');

router.get('/', calculadoraController.hola);
router.get('/sumar/:n1/:n2', calculadoraController.sumar);
router.get('/restar/:n1/:n2', calculadoraController.sumar);
router.get('/multiplicar/:n1/:n2', calculadoraController.multiplicar);

module.exports = router;