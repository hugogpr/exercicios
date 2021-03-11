const calculadora = {
    somar: function(a,b) {
        return a+b;
    },
    subtrair: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        if (b!=0) {
            return a/b;
        }else{
            return 0;
        };
    }
}

console.log(calculadora.somar(1,1));
console.log(calculadora.subtrair(5,2));
console.log(calculadora.multiplicar(2,5));
console.log(calculadora.dividir(10,5));