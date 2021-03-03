let cachorro = {
    nome: "dog",
    raca: "buldog",
    porte: "medio",
    idade: 15,
    latir: function(){
        console.log("Au! Au!");
    }
}

console.log(cachorro);
console.log(cachorro.nome);
console.log(cachorro.idade);

cachorro.nome = "Dexter";
cachorro.idade = 2;

console.log(cachorro);
console.log(cachorro.nome);
console.log(cachorro.idade);
cachorro.latir();