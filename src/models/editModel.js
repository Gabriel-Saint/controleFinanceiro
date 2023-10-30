const express = require('express');
const path = require('path');
const db = require('../../config/database');

const caminhoAbsoluto =  path.resolve(__dirname, '../../view/editar.ejs');

function exibirEditar(req, res){
    const id = req.query.id;
    const sql = `SELECT * FROM registros WHERE id = ?`;

    db.query(sql, [id], (err, results) => {
        if (err) {
                console.log("erro:")
        } else {
          
            const dados = results[0]; 
    
            
            res.render(caminhoAbsoluto, { dados });
        }
    })
}

module.exports = {
    exibirEditar: exibirEditar
}