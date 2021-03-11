const validarDominio = /[?www.]\w+\.com.br|com/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.horadecordar.com.br"));
console.log(validarDominio.test("horadecordar.com.br"));