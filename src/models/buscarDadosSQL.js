const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database'); 
function buscarDadosSQL(req, res) {
  // SQL
  const sql = 'SELECT * FROM transacoes';
  db.all(sql, (err, rows) => {
    if (err) {
      console.error('Erro ao consultar registros:', err);
      res.status(500).send('Erro ao consultar registros.');
      return;
    }

    console.log('Consulta realizada com sucesso no banco de dados.');
    res.json(rows);
  });
}
console.log(db)
module.exports = {
  buscarDadosSQL: buscarDadosSQL
};
