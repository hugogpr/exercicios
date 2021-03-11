//arrow function
function armazenarSoma(x){
    return y => x+y;
}
let soma1 = armazenarSoma(3);
console.log(soma1(5));

let soma2 = armazenarSoma(5);
console.log(soma2(10));

//function normal
function armazenarSoma2(x){
    return function(y){
        return x+y;
    }
}
let soma3 = armazenarSoma2(2);
console.log(soma3(5));

let soma4 = armazenarSoma2(7);
console.log(soma4(15));