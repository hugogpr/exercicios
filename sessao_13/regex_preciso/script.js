const cep = /\d{5}-\d{3}/;

console.log(cep.test("55555-333"));
console.log(cep.test("abc 55555-333 abc"));