const express = require('express');
const router = express.Router();

//controllers
const homeController = require('../src/controllers/homeController');

//models
//fazer cadastrar

router.get('/', homeController.exibirHome);

module.exports = router;