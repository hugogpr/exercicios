let cachorro = {
    nome: "dog",
    raca: "buldog",
    porte: "medio",
    idade: 15    
}

console.log(cachorro);
console.log(cachorro.porte);

delete cachorro.porte;
console.log(cachorro.porte);

cachorro.vacina = true;


cachorro.latir = function(){
    console.log("Au! Au!");
}
cachorro.latir();

console.log(cachorro);