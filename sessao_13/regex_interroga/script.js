/**
 * função ? deixa o caracter sendo opcional
 */
const padrao = /abacax?i/;

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));
