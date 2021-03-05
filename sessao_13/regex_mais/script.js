
const mais = /\d+/;

console.log(mais.test("1"));
console.log(mais.test("asd"));
console.log(mais.test("1588888888888888"));
console.log(mais.test("188a"));

console.log("\n")

const semMais = /\d/;

console.log(semMais.test("1"));
console.log(semMais.test("asd"));
console.log(semMais.test("1588888888888888"));
console.log(semMais.test("188a"));
/**
 * serve para formar padroes ex:
 */
 console.log("\n")

 const  padrao = /a\d+a/;//começa com a numeros e termina com a

 console.log(padrao.test("1"));
 console.log(padrao.test("asd"));
 console.log(padrao.test("aa1588888888888888"));
 console.log(padrao.test("a188a"));