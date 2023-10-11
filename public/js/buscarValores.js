function buscarValores(){
    fetch('/buscar-valores')
    .then(response => response.json()) 
    .then(data => {
      // Aqui, 'data' conterá os dados retornados em formato JSON
  
     
        document.getElementById('entrada').innerText = data[0].total_entradas;
        document.getElementById('saidas').innerText = data[0].total_saidas;
        document.getElementById('total').innerText = data[0].saldo;

    console.log(data.total_entradas);
    })
    .catch(error => {
      console.error('Erro ao obter os saldos:', error);
    });
  
  }
  
  buscarValores();