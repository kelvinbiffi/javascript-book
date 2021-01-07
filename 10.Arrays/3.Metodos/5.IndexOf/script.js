var arrPrato = new Array('Arroz', 'Tomate', 'Alface');
arrPrato.push('Feijão');
if (arrPrato.indexOf('Arroz') !== -1) {
  arrPrato.shift();
}
console.log(arrPrato);
