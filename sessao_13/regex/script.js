/*
    o RegEx pode encontrar um padrao no meio de uma sentença....
*/
let reg1 = new RegExp("teste");
let reg2 = /teste/;
/*--------*/

console.log(/testando/.test("tttttestandooooo"));
console.log(/testando/.test("asdtestadsa"));

console.log('\n');
/*----------*/

const reg3 = new RegExp("bola");
console.log(reg3.test('Tem bola?'));
console.log(reg3.test("não tem!"))

console.log('\n');
/*----------*/

const reg4 = /bola/;
let variavel = 'bola, bolo, bola, base.';
console.log(reg4.test('Tem bola?'));
console.log(reg4.test("não tem!"));
console.log(reg4.test(variavel));


console.log('\n');
/*----------*/

console.log(/base/.test(variavel));

console.log('\n');
/*----------*/

/* 
    ele tambem pode encontrar um conjunto 
*/
console.log('Conjuntos');

let regC = /[123]/;
// vai buscar os numeros 1, 2, 3 - se achar qualquer um retorna true n emporta se estiver no meio do numero....

console.log(regC.test("existe 4 aqui?"));
console.log(regC.test("existe 2 aqui?"));
console.log(regC.test("existe 42 aqui?"));

console.log(/[0-9]/.test("o numero 8 está presente aqui?"));

console.log('\n');
/*----------*/