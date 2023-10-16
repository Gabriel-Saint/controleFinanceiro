
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
         
          let i = 1;
          data.forEach(dado => {
            const newRow = tbody.insertRow();
            const tipo = dado.tipo;
            const tipoFormatado = tipo === 1 ? "Entrada" : "Saída";
            dado.tipo = tipoFormatado;
            dado.valor = `R$: ${dado.valor}`;
            const dataFormatada = new Date(dado.dataRegistro).toLocaleDateString();
            dado.dataRegistro = dataFormatada;
            const colValues = [i++, dado.descricao, dado.categoria, dado.valor, dado.tipo, dado.dataRegistro];
            colValues.forEach(value => {
              const cell = newRow.insertCell();
              cell.textContent = value;
            });
            
            const cellDelete = newRow.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = `<a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-trash3-fill lixeira" viewBox="0 0 16 16">
            <path
              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg></a>`;
          deleteButton.id = `excluir-${dado.id}`;
            cellDelete.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
              const idDoBotao = deleteButton.id.split('-')[1]; 
              
              const confirmacao = window.confirm('Tem certeza que deseja excluir este item?');
              if(confirmacao){
                handleDelete(idDoBotao); 
              }
              else{
                return;
              }
            });

          });
        } else {
        
          const tbody = tabela.createTBody();
          const row = tbody.insertRow();
          const cell = row.insertCell();
          cell.colSpan = 7; 
          cell.textContent = 'Nenhum dado disponível.';
        }
      })


}

function handleDelete(id){

  const url = `/excluir-registro/${id}`;
  
   
    const requestOptions = {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json', 
      },
    };
  
    
    fetch(url, requestOptions)
      .then(response => {
        if (response.ok) {
       
          console.log(`Item com ID ${id} foi excluído com sucesso.`);
         
        } else {
          
          console.error(`Erro ao excluir o item com ID ${id}`);
        }
      })
      .catch(error => {
       
        console.error(`Erro ao excluir o item com ID ${id}: ${error}`);
      });

}


buscarDadosSQL();
