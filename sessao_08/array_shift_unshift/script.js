// remove elementos no começo do array
let frutas = ['pera','melão','melancia','maça','banana']
let frutaRemovida = [frutas.shift()];

console.log(frutas);
console.log(frutaRemovida);

// adiciona elementos no começo do array
frutaRemovida.unshift(frutas.shift());
frutas.unshift('Abacate');


console.log(frutas);
console.log(frutaRemovida);
