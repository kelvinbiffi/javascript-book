function tempoIsencaoIPVA(anoAtual) {
  var mensagem = "Carro não possui isenção de IPVA";
  var mensagemIsencao = "Calculo dentro da faixa de isenção de IPVA";

  return function (anoCarro) {
    var idadeCarro = anoAtual - anoCarro;
    if (idadeCarro > 30) {
      console.log(mensagemIsencao);
    } else {
      console.log(mensagem);
    }
  };
}

var verificadorIPVA = tempoIsencaoIPVA(2018);

verificadorIPVA(1978);
verificadorIPVA(1991);
