
function buscarDadosSQL(){
    fetch('/buscar-dados')
    .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação.');
        }
        return response.json();
      })
      .then(data => {
        const tabela = document.getElementById('tabela');
        const tbody = document.getElementById('tbody');
  
        // Limpe o conteúdo atual da tabela
        //tabela.innerHTML = '';
  
        // Verifique se há dados para exibir
        if (data && data.length > 0) {
         
          // Preencha a tabela com os dados
          //const tbody = tabela.createTBody();
          data.forEach(dado => {
            const newRow = tbody.insertRow();
            const colValues = [dado.id, dado.descricao, dado.categoria, dado.valor, dado.tipo, dado.dataRegistro];
  
            colValues.forEach(value => {
              const cell = newRow.insertCell();
              cell.textContent = value;
            });

          });
        } else {
          // Se não houver dados, exiba uma mensagem na tabela
          const tbody = tabela.createTBody();
          const row = tbody.insertRow();
          const cell = row.insertCell();
          cell.colSpan = 7; // Para ocupar todas as colunas
          cell.textContent = 'Nenhum dado disponível.';
        }
      })


}


buscarDadosSQL();
