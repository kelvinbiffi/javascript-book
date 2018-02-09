function verificarMaiorIdade(nomePessoa, idadePessoa) {
  if (idadePessoa >= 18) {
    return nomePessoa + " é maior de idade."
  } else {
    return nomePessoa + " tem menos de 18 anos."
  }
}

function verificarIdade(nomePessoa, anoDeNascimento) {
  var idade = 2018 - anoDeNascimento;
  var mensagemRetorno = verificarMaiorIdade(nomePessoa, idade);
  console.log(mensagemRetorno);
}

var nome = "Joana";
var nascimento = 2002;
verificarIdade(nome, nascimento);

verificarIdade("Cassiano", 1988);

nome = "John";
nascimento = 1978;
verificarIdade(nome, nascimento);
