let idade = 19;
let responsavel = false;

if(idade > 18 ){
    console.log("autorizado");
}
else if(responsavel == true){
    console.log("autorizado");
}
else{
    console.log("não autorizado");
}
if(idade > 18 || responsavel == true){
    console.log("autorizado");
}
else{
    console.log("não autorizado");
}