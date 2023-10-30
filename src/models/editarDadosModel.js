const express = require('express');
const router = express.Router();
const path = require('path');
const caminhoAbsoluto = path.resolve(__dirname, '../../view/index.ejs');
const db = require('../../config/database'); 

function apagarRegistro(req, res) {
  const id = req.body.id;
  const sql = 'DELETE FROM registros WHERE id = ?';
  db.query(sql, [id], function (err) {
    if (err) {
      console.error('Erro ao apagar o registro no banco de dados:', err.message);
      res.status(500).send('Erro ao apagar.');
      return;
    }

    console.log(`Registro ${id} excluído com sucesso no banco de dados.`);
    res.redirect('/');
  });
}

function editar(req, res) {
  
  const id = req.body.id;
  const descricao = req.body.descricao;
  const categoria = req.body.categoria;
  const valor = req.body.valor;
  const tipo = req.body.tipo;
  const dataRegistro = req.body.dataRegistro;

  console.log(tipo)
  
    const sql = 'UPDATE registros SET  descricao = ?, categoria = ?, tipo = ?, valor= ?, dataRegistro = ? WHERE id = ?';
    db.query(sql,[descricao, categoria, tipo, valor, dataRegistro, id], function (err) {
      if (err) {
        console.error('Erro ao inserir o registro no banco de dados:', err.message);
        res.status(500).send('Erro ao inserir o registro.');
        return;
      }
  
      console.log('registro esditado.');
      res.redirect('/');
    });
  }
module.exports = {
  apagarRegistro: apagarRegistro,
  editar: editar
};