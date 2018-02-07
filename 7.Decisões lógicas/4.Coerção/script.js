var variavelCoercao = 37;
var variavelSemCoercao = 37;

if (variavelCoercao == "37") {
  console.log("Comparação com coerção.");
}

if (variavelSemCoercao === "37") {
  console.log("Este trecho não será esecutado, sem coerção.");
}
