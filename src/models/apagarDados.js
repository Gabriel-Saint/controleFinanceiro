const express = require('express');
const router = express.Router();
const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../../view/index.ejs');
const db = require('../../config/database'); 

function apagarRegistro(req, res) {
const id = req.params.id;
console.log(`${id} aqui o id na rota`);
  const sql = 'DELETE FROM registros WHERE id = ?';
  db.query(sql,[id], function (err) {
    if (err) {
      console.error('Erro ao inserir o registro no banco de dados:', err.message);
      res.status(500).send('Erro ao inserir o registro.');
      return;
    }

    console.log('Registro apagado com sucesso no banco de dados.');
    res.redirect('/');
  });
}

module.exports = {
  apagarRegistro: apagarRegistro
};