var nome = "Michele";
var emprego = "desenvolvedor";

switch (emprego) {
  case "policial":
    console.log(nome + " é uma policial.");
    break;
  case "cozinheiro":
    console.log(nome + " é uma cozinheira.");
    break;
  case "desenvolvedor":
    console.log(nome + " é uma desenvolvedora");
    break;
  case "lutador":
    console.log(nome + " é uma lutadora.");
    break;
  default:
    console.log(nome + " trabalha em outra coisa.");
}

// Como seria utilizando IF e ELSE
if (emprego === "policial") {
  console.log(nome + " é uma policial.");
} else if (emprego === "cozinheiro") {
  console.log(nome + " é uma cozinheira.");
} else if (emprego === "desenvolvedor") {
  console.log(nome + " é uma desenvolvedora");
} else if (emprego === "lutador") {
  console.log(nome + " é uma lutadora.");
} else {
  console.log(nome + " trabalha em outra coisa.");
}
