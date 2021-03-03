const nome = "hugo";
let a = prompt("Qual seu nome?")

if(a === nome){
    console.log(`olá ${nome}, seja bem vindo`);
}else{
    alert(`Você não foi autorizado ${a}! >:(`)
}