const form = document.getElementById('dados-tarefa');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputListaTarefa = document.getElementById('lista-tarefa');

    let linha = '<tr>';
    linha += `<td>${inputListaTarefa.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
    inputListaTarefa.value = '';


});