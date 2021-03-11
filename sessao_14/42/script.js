const reg = /\d+ID\b/;

console.log(reg.test("123"));
console.log(reg.test("123_ID"));
console.log(reg.test("123ID"));
console.log(reg.test("frutaID"));
console.log(reg.test("ID"));
console.log(reg.test("123id"));