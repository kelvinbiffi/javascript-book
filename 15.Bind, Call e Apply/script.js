var carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function (cor, ano) {
        console.log(this.nome, ano, this.marca, cor);
    }
}

carro.mostrarDados('Azul', 1970);

// Call
carro.mostrarDados.call({
    nome: 'Opala',
    marca: 'Chevrolet'
}, 'Bordo', 1972);


// Bind
var brasiliaAmarela = carro.mostrarDados.bind({
    nome: 'Brasilia',
    marca: 'VW'
}, 'Amarelo');

brasiliaAmarela(1974);
brasiliaAmarela(1975);
brasiliaAmarela(1982);

// Apply
carro.mostrarDados.apply({
    nome: 'Onix',
    marca: 'Chevrolet'
}, ['Cinza', 2016]);
