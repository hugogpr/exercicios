const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(reg.test("192.168.15.1"));
console.log(reg.test("127.0.0.1"));
console.log(reg.test("127.0.0"));
console.log(reg.test("127.1100"));
console.log(reg.test("127.a.f.1"));
console.log(reg.test("192.1682.15.1"));