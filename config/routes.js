const express = require('express');
const router = express.Router();

//controllers
const homeController = require('../src/controllers/homeController');

//models
const cadastrarModel = require('../src/models/cadastrarModel');
/*const buscarDadosSQL = require('../src/models/buscarDadosSQL');*/
const buscarDadosSQLteste = require('../src/models/buscarDadosSQLteste');

const apagarDados = require('../src/models/apagarDados')

router.get('/', homeController.exibirHome);
//router.get('/buscar-dados', buscarDadosSQL.buscarDadosSQL)
router.get('/buscar-dados/:limit/:offset', buscarDadosSQLteste.buscarDadosSQL)

//router.get('/buscar-valores', buscarDadosSQL.buscarValores)

router.post('/registrar', cadastrarModel.processarRegistro);

router.delete('/excluir-registro/:id', apagarDados.apagarRegistro);


module.exports = router;