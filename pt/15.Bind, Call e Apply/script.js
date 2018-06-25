var carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function (cor, ano) {
        console.log(this.nome, ano, this.marca, cor);
    }
}

carro.mostrarDados('Azul');

// Bind

// Call
carro.mostrarDados.call({
    nome: 'Opala',
    marca: 'Chevrolet'
}, 'Bordo', 1972);

// Apply
