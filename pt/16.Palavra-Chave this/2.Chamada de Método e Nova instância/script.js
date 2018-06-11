var objeto = {
  retorno: function () {
    return this;
  }
};

// Chamada de método
console.log(objeto.retorno());

// Chamada de função/método em uma nova instância
console.log(new objeto.retorno());
