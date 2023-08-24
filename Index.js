const displayValorAnterior = document.getElementById('valAnterior');
const displayValorAtual = document.getElementById('valAtual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorAtual);

//Ao clicar nos botões numéricos, eles aparecerão no display
botoesNumeros.forEach(botao => {
    botao.addEventListener('click', () => display.AddNumeros(botao.innerHTML));
});
//O mesmo para os operadores
botoesOperadores.forEach(botao => {
    botao.addEventListener('click', () => display.computar(botao.value));
});