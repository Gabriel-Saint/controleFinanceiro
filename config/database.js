const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Especifique o caminho completo para o arquivo do banco de dados
const dbPath = path.resolve(__dirname, '../..DBFinanceiro.sqlite');
const db = new sqlite3.Database(dbPath, (erro) => {
  if (erro) {
    console.error('Erro ao abrir o banco de dados:', erro.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite');
  }
});

const criarTabela = `
CREATE TABLE IF NOT EXISTS transacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  data DATE NOT NULL,
  tipo INTEGER NOT NULL, -- 1 para entrada, 0 para saída
  categoria TEXT,
  descricao TEXT NOT NULL,
  valor DECIMAL(10, 2) NOT NULL
)
`;

db.run(criarTabela, (erro) => {
  if (erro) {
    console.error('Erro ao criar tabela', erro);
  } else {
    console.log('Tabela criada com sucesso!');
  }
});

module.exports = db;
