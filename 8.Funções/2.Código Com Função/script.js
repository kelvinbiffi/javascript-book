function verificarIdade(nomePessoa, anoDeNascimento) {
  var idade = 2018 - anoDeNascimento;
  if (idade >= 18) {
    return nomePessoa + " é maior de idade.";
  } else {
    return nomePessoa + " tem menos de 18 anos.";
  }
}

var nome = "Joana";
var nascimento = 2002;
console.log(verificarIdade(nome, nascimento));

console.log(verificarIdade("Cassiano", 1988));

nome = "John";
nascimento = 1978;
var texto = verificarIdade(nome, nascimento);
console.log(texto);
