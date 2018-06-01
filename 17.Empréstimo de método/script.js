var objetoGato = {
  alimento: "ração",
  comer: function () {
    console.log("Estou comendo " + this.alimento);
  }
}

var objetoLeao = {
  alimento: "carne"
};
objetoLeao.comer = objetoGato.comer;

objetoLeao.comer();
