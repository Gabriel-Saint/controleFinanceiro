


/*document.addEventListener('DOMContentLoaded', () => {
    const btnExcluir = document.getElementById('btnExcluir');

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
});*/