
exibirTexto();

function exibirTexto() {
  console.log("Fase de execução, declaração de função");
}

exibirTexto();

// exibirOutroTexto();

var exibirOutroTexto = function () {
  console.log("Fase de execução, expressão de função");
};

exibirOutroTexto();
