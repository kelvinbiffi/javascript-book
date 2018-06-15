// Como não é um construtor o nome do objeto
// Inicia em minúsculo
var carroProto = {
  velocidade: 0,
  acelerar: function () {
    this.velocidade += 5;
  },
  parar: function () {
    this.velocidade = 0;
  }
};

// Utilizando uam função do prototype do Object
// Para criar um objeto
var fusca = Object.create(carroProto, {
  nome: { value: 'Fusca' },
  cor: { value: 'Azul' },
	marca: { value: 'VW' },
	ano: { value: 1975 }
});

console.log(fusca);
