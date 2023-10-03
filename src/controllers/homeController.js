const express = require('express');
const path = require('path');

const caminhoAbsoluto =  path.resolve(__dirname, '../../view/index.ejs');

function exibirHome(req, res){
    res.render(caminhoAbsoluto);
}

module.exports = {
    exibirHome: exibirHome
}