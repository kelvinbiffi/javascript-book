// Primeira letra em maiúsculo para identificar que é um construtor
var Carro = function (nome, cor, marca, ano) {
  this.nome = nome;
  this.cor = cor;
	this.marca = marca;
	this.ano = ano;
};

var fusca = new Carro('Fusca', 'Azul', 'VW', 1975);
var up = new Carro('Up!', 'Rosa', 'VW', 2016);
var onix = new Carro('Onix', 'Bege', 'Chevrolet', 2014);
var opala = new Carro('Opala', 'Bordo', 'Chevrolet', 1973);

console.log(fusca);
console.log(up);
console.log(onix);
console.log(opala);
