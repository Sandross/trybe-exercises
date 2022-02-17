const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matriz) {
  return matriz.reduce((contador, elemAtual, index, array) => contador.concat(elemAtual),[]);
}
console.log(flatten(arrays));