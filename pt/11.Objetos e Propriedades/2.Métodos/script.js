var carro = {
  extras: ['ar-condicionado', 'freios abs', 'som'],
  velocidade: 0,
  faroisLigados: false,
  ligarFarios: function () {
    this.faroisLigados = true;
  },
  acelerar: function (velocidade) {
    this.velocidade += velocidade;
  },
  freiar: function () {
    this.velocidade = 0;
  }
}
carro.ligarFarios();
console.log('Farois ligados: ' + carro.faroisLigados);
carro.acelerar(50);
console.log('Velocidade: ' + carro.velocidade);
carro.freiar();
console.log('Velocidade: ' + carro.velocidade);
