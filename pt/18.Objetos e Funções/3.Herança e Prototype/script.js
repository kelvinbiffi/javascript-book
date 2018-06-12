// Primeira letra em maiúsculo para identificar que é um construtor
var Carro = function (nome, cor, marca, ano) {
  this.nome = nome;
  this.cor = cor;
	this.marca = marca;
	this.ano = ano;
};

Carro.prototype.calcularIsencaoIVPA = function () {
  var anoAtual = new Date().getFullYear() - this.ano;
  if (anoAtual >= 30) {
    console.log('O carro ' + this.nome + ' possui isenção de IPVA.');
  } else {
    console.log('O carro ' + this.nome + ' não possui isenção de IPVA.');
  }
};

var fusca = new Carro('Fusca', 'Azul', 'VW', 1975);
var onix = new Carro('Onix', 'Bege', 'Chevrolet', 2014);
var opala = new Carro('Opala', 'Bordo', 'Chevrolet', 1973);

fusca.calcularIsencaoIVPA();
onix.calcularIsencaoIVPA();
opala.calcularIsencaoIVPA();
