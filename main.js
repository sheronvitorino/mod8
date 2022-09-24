const form = document.getElementById('dados-pessoas');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('telefone-pessoa');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

});