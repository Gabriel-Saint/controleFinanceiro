/*document.addEventListener('DOMContentLoaded', () => {
    const btnExcluir = document.getElementById('btnExcluir');

    btnExcluir.addEventListener('click', () => {
        const idDoBotao = btnExcluir.getAttribute('data-id'); //  o valor do atributo data-id
        const confirmacao = window.confirm('Tem certeza que deseja excluir este item?');
        if (confirmacao) {
            handleDelete(idDoBotao);
        } else {
            return;
        }
    });

    function handleDelete(id) {
        const url = `/excluir/${id}`;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, requestOptions)
    .then(response => {
        console.log('Status da resposta:', response.status); // Adicione esta linha para depuração
        if (response.ok) {
            console.log(`Item com ID ${id} foi excluído com sucesso.`);
        } else {
            console.error(`Erro ao excluir o item com ID ${id}`);
        }
    })
    .catch(error => {
        console.error(`Erro ao fazer a solicitação DELETE: ${error}`);
    });
    }
});*/