const express = require('express');
const router = express.Router();

//controllers
const homeController = require('../src/controllers/homeController');
const editModel = require('../src/models/editModel');

//models
const cadastrarModel = require('../src/models/cadastrarModel');
/*const buscarDadosSQL = require('../src/models/buscarDadosSQL');*/
const buscarDadosSQLteste = require('../src/models/buscarDadosSQLteste');

const editarDados = require('../src/models/editarDadosModel')

router.get('/', homeController.exibirHome);
router.get('/editar', editModel.exibirEditar);
//router.get('/buscar-dados', buscarDadosSQL.buscarDadosSQL)
//router.get('/buscar-dados/:limit/:offset', buscarDadosSQLteste.buscarDadosSQL)
router.get('/buscar-dados', buscarDadosSQLteste.buscarDadosSQL)
router.get('/buscar-valores', buscarDadosSQLteste.buscarValores)

router.post('/registrar', cadastrarModel.processarRegistro);
router.post('/editar-registro', editarDados.editar);

router.post('/excluir', editarDados.apagarRegistro)


module.exports = router;