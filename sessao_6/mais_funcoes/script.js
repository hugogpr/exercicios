function multiplicarTresNumeros(x,y,z){
    return x*y*z;
}
console.log(multiplicarTresNumeros(1,2,3));
const mult = multiplicarTresNumeros(5,4,8);
console.log("o valor de mult é " + mult);

function podeDirigir(idade, cnh){
    if(idade>=18 && cnh==true){
        console.log("pode dirigir");
    }else{
        console.log("não pode dirigir");
    }
}
podeDirigir(22,true);