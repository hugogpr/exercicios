const reg = /[^a-z][A-Z]/;

console.log(reg.test("letras minusculas"));
console.log(reg.test("Inicial maiuscula"));
console.log(reg.test("SÓ MAIUSCULAS"));
console.log(reg.test("123"));