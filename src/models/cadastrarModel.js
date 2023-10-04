const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');

const caminhoAbsoluto =  path.resolve(__dirname, '../../view/index.ejs');


function processarRegistro(req, res){
    
    let descricao = req.body.descricao;
    let categoria = req.body.categoria;
    let valor = req.body.valor;
    let tipo = req.body.tipo;
    let dataRegistro = req.body.dataRegistro;



    
    
    // sql
    const sql = 'INSERT INTO registros(descricao, categoria, valor, tipo, dataRegistro) values (?, ?, ?, ?, ?)';
    db.query(sql, [descricao, categoria, valor, tipo, dataRegistro], (err, results) => {
        if (err) {
          console.error('Erro ao inserir o registro no banco de dados:', err);
          res.status(500).send('Erro ao inserir o registro.');
          return;
        }
       
        console.log('Registro inserido com sucesso no banco de dados.');
        descricao = '';
        categoria = '';
        valor = '';
        tipo = '';
        dataRegistro = '';
        res.status(200).render(caminhoAbsoluto);
      });
    

    


}

module.exports = {
    processarRegistro: processarRegistro
};
