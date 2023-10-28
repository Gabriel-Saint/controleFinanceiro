new DataTable('#example', {
    
    ajax: {
        url: '/buscar-dados',
        dataSrc: ''
    },
    language:{
      url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
    },
    columns: [
        { data: 'id' },
        { data: 'descricao' },
        { data: 'categoria' },
        { data: 'tipo' },
        { data: 'valor' },
        { data: 'dataRegistro' },
        {
            data: 'id',
            render: function (data, type, row) {
                if (type === 'display') {
                    return `<form action="apagar" method="post" id="formBtn">
                    <input type="hidden" value="${data}" name="id">
                    <button id="btnExcluir"" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash3-fill lixeira" viewBox="0 0 16 16">
                        <path
                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </button></form>`;
                }
                return data;
            }
        }
    ]
    
});
/*const btnExcluir = document.getElementById('btnExcluir');

btnExcluir.addEventListener('click', () => {
    const idDoBotao = btnExcluir.getAttribute('data-id'); // Obter o valor do atributo data-id

    console.log(idDoBotao);

    const confirmacao = window.confirm('Tem certeza que deseja excluir este item?');
    if (confirmacao) {
        handleDelete(idDoBotao);
    } else {
        return;
    }
});

function handleDelete(id) {
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
         */