const express = require('express');
const router = express.Router();

//controllers
const homeController = require('../src/controllers/homeController');

//models
const cadastrarModel = require('../src/models/cadastrarModel');
const buscarDadosSQL = require('../src/models/buscarDadosSQL');

router.get('/', homeController.exibirHome);
router.get('/buscar-dados', buscarDadosSQL.buscarDadosSQL)

router.post('/registrar', cadastrarModel.processarRegistro);

module.exports = router;