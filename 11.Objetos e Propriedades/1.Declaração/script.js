var objetoCarro = {
  modelo: '147',
  numeroVidros: 4,
  marca: 'Fiat',
  numeroPortas: 2
}

var objetoCasa = new Object();
objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 523000.320;
objetoCasa['aluguel'] = false;
objetoCasa['venda'] = true;

objetoCarro.numeroPortas = 4;
var umIdentificadorDaCasa = 'valorImovel';

console.log(objetoCarro);
console.log(objetoCarro.modelo);
console.log(objetoCasa['numeroComodos']);
console.log(objetoCasa[umIdentificadorDaCasa]);
