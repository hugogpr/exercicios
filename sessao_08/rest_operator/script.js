//é uma função com quantidade de parametros indefinida

let num = 1;
let num1 = 6;
let num2 = 32;
let num3 = 84
let num4 = 9;
let num5 = 7;

function imprimirNumero(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
        
    }
}
imprimirNumero(num,num1,num2,num3,num4,num5);
imprimirNumero(num,num1,num5);