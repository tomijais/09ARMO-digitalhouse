const express = require('express')
const router = express.Router();
const heroesController = require('../controllers/heroesController')

router.get('/', heroesController.index)
router.get('/detalle/:id', heroesController.mostrarDetalle)
router.get('/bio/:id/:ok?', heroesController.mostrarDetalleConBio)

module.exports = router;