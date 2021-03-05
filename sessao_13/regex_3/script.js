let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

console.log('\n');

let palavraTresLetras = /\w\w\w/;
// confere se tem no minimo 3 letras
console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("ano"));
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste"));

console.log('\n');

const dia = /\d\d/;
//condicional para verificar se tem apenas 2 letras e elas são numeros
console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));