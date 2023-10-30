const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');

const caminhoAbsoluto =  path.resolve(__dirname, '../../view/index.ejs');


function processarRegistro(req, res){
    
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;
    const valor = req.body.valor;
    const tipo = req.body.tipo;
    const dataRegistro = req.body.dataRegistro;



    
    
    // sql
    const sql = 'INSERT INTO registros(descricao, categoria, valor, tipo, dataRegistro) values (?, ?, ?, ?, ?)';
    db.query(sql, [descricao, categoria, valor, tipo, dataRegistro], (err, results) => {
        if (err) {
          console.error('Erro ao inserir o registro no banco de dados:', err);
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
