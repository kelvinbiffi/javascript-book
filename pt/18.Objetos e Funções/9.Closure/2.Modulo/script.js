var moduloCarro = (function () {
  // variavel privada
  var velocidade = 0;

  // função privada
  var girarEngrenagens = function () {
    velocidade += 5;
  };

  // função privada
  var aumentarVelocidade = function () {
    girarEngrenagens();
  };

  // retorno interface de acao
  return {
    acelerar: aumentarVelocidade
  };
})();

moduloCarro.acelerar();
