const express = require('express');
const router = express.Router();
const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../../view/index.ejs');
const db = require('../../config/database'); // Importe o banco de dados SQLite

function processarRegistro(req, res) {
  const descricao = req.body.descricao;
  const categoria = req.body.categoria;
  const valor = req.body.valor;
  const tipo = req.body.tipo;
  const data = req.body.dataRegistro;

  // SQL
  const sql = 'INSERT INTO transacoes (data, tipo, categoria, descricao, valor) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [data, tipo, categoria, descricao, valor], function (err) {
    if (err) {
      console.error('Erro ao inserir o registro no banco de dados:', err.message);
      res.status(500).send('Erro ao inserir o registro.');
      return;
    }

    console.log('Registro inserido com sucesso no banco de dados.');
    res.redirect('/');
  });
}

module.exports = {
  processarRegistro: processarRegistro
};