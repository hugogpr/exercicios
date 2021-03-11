const reg = /^(?=.{3,16}$)[a-z0-9-_]/;

let a = "asd";
console.log(reg.test(a));

a = "asd123";
console.log(reg.test(a));

a = "a_123-abc";
console.log(reg.test(a));

a = "asdasdasdasdasdas";//+ 16
console.log(reg.test(a));

a = "a";//-3
console.log(reg.test(a));

a = "1";//-3
console.log(reg.test(a));


a = "a_123 abc";
console.log(reg.test(a));