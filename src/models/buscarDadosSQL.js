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
function buscarValores(req, res) {
  // SQL
  const sql = 'SELECT SUM(CASE WHEN tipo = 1 THEN valor ELSE 0 END) AS total_entradas, SUM(CASE WHEN tipo = 0 THEN valor ELSE 0 END) AS total_saidas,SUM(CASE WHEN tipo = 1 THEN valor ELSE -valor END) AS saldo FROM transacoes;';
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

module.exports = {
  buscarDadosSQL: buscarDadosSQL,
  buscarValores: buscarValores
};
