var animaisMarinhos = ['peixe', 'baleia', 'golfinho', 'tubarão', 'lula'];
for (var i = 0; i < animaisMarinhos.length; i++) {
  if (animaisMarinhos[i] == 'tubarão') {
    console.log(animaisMarinhos[i] + ' encontrado.');
    break;
  } else {
    console.log('Procurar animal marinho.');
  }
}
