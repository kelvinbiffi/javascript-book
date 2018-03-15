var nomes = ['Soluço', 'Astrid', 'Melequento', 'Perna de peixe', 'Bocão'];
var nomePesquisado = null;
var i = 0;
while (nomePesquisado == null && i < nomes.length) {
  if (nomes[i] == 'Melequento') {
    nomePesquisado = nomes[i];
  } else {
    console.log(nomes[i] + ' não é o nome pesquisado');
  }
  i++;
}
console.log('Nome encontrado ' + nomePesquisado);
