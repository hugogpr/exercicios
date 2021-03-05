// negando a expressão
/**
 * expressao toda zuada .... 
 * permitindo o "a" msm falando q n pode....
 * não entendi direito o por quê!
 */
const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a"));

const notAaZ = /[^a-z]/;

console.log(notAaZ.test("asd"));

console.log(notAaZ.test(" "));