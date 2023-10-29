const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth() + 1;
const dia = dataAtual.getDate();
window.getDate = `${ano}-${mes}-${dia}`;



