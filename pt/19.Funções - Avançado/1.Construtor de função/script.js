// Primeira letra em maiúsculo para identificar que é um construtor
var Carro = function (nome, cor, marca, ano) {
  this.nome = nome;
  this.cor = cor;
	this.marca = marca;
	this.ano = ano;
};

var fusca = new Carro('Fusca', 'Azul', 'VW', 1975);

console.log(fusca);
