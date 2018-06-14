function Carro(nome, cor, marca, ano) {
  this.nome = nome;
  this.cor = cor;
	this.marca = marca;
	this.ano = ano;
};

Carro.prototype.velocidade = 0;
Carro.prototype.acelerar = function () {
  this.velocidade += 5;
};
Carro.prototype.parar = function () {
  this.velocidade = 0;
};


var fusca = new Carro('Fusca', 'Azul', 'VW', 1975);

console.log(fusca);
