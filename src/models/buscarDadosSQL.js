const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');

function buscarDadosSQL(req, res){
    
    // sql
    const sql = 'SELECT id, descricao, categoria, valor, tipo, dataRegistro FROM registros ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if (err) {
          console.error('Erro ao consultar registros:', err);
          res.status(500).send('Erro ao consultar registros.');
          return;
        }
    
        console.log('consulta realizada com sucesso no banco de dados.');
        //res.status(200).render(caminhoAbsoluto);
        res.json(results);
      });
  
}
function buscarValores(req, res){
    
  // sql
  const sql = 'SELECT SUM(CASE WHEN tipo = 1 THEN valor ELSE 0 END) AS total_entradas, SUM(CASE WHEN tipo = 0 THEN valor ELSE 0 END) AS total_saidas, SUM(CASE WHEN tipo = 1 THEN valor ELSE -valor END) AS saldo FROM registros';

  db.query(sql, (err, results) => {
      if (err) {
        console.error('Erro ao consultar registros:', err);
        res.status(500).send('Erro ao consultar registros.');
        return;
      }
  
      console.log('consulta realizada com sucesso no banco de dados.');
      //res.status(200).render(caminhoAbsoluto);
      res.json(results);
    });
  


}

module.exports = {
    buscarDadosSQL: buscarDadosSQL,
    buscarValores: buscarValores
};
