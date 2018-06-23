var a = "Olá!";
primeiraFuncao();

function primeiraFuncao() {
  var b = "Oi!!";
  segundaFuncao();

  function segundaFuncao() {
    var c = "Iaii!!";
    console.log(a, b, c);
  }
}
