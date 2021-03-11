const reg = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(reg.test("Marca: "));
console.log(reg.test("Marca: Nike"));
console.log(reg.test("Marca: Mike"));
console.log(reg.test("Nike"));