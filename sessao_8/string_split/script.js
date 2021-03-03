/* 
    Split - vc determina um separador ex: espaço, virgula, ponto, etc
    ele quebra a string em um arrey
*/
let frase = "teste de split";
let frase2 = 'nada sei, isso eu afirmo';

let palavras = frase.split(" ");
let seg = frase2.split(",");
let ter = frase2.split("a");

console.log(palavras);
console.log(seg);
console.log(ter);