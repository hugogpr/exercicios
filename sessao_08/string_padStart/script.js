// inserir caracteres antes da string...
let milAoContrario = '1';
console.log(milAoContrario.padStart(4,'0')); // 0001

//se nao estiver a quantidade de caracter determinada ele completa ex..
let a = '500';
console.log(a.padStart(3,'0')); // 500

let b = '50';
console.log(b.padStart(3,'0')); // 050

//mas nao altera se estiver a mais
let c = '5500';
console.log(c.padStart(3,'0')); //5500
