var arrAnoCarros = [1965, 1992, 1997, 1975, 1981];

// Função callback
function calcularTempoCarro(anoCarro) {
  var data = new Date();
  return data.getFullYear() - anoCarro;
}

function anoDosCarros(arr, fun) {
  var arrTempoCarros = [];
  for (var i = 0; i < arr.length; i++) {
    arrTempoCarros.push(fun(arr[i]));
  }
  return arrTempoCarros;
}

// Passando no segundo parametro uma função
var arrCarros = anoDosCarros(arrAnoCarros, calcularTempoCarro);

console.log(arrCarros);
