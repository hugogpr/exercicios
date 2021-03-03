let animal1 = {
    nome: "dog",
    raca: "buldog",
    tipo: "cachorro",
}

let animal2 = animal1;

let animal3 = {
    nome: "dog",
    raca: "buldog",
    tipo: "cachorro",
}

console.log(animal1 == animal2); // true
console.log(animal1 == animal3); // false

// o obj animal 2 é o msm obj animal 1...
// quando o obj 1 sofre alteração o obj 2 tbm sofrerá...
console.log(animal2);
animal1.tipo = 'gato';
console.log(animal1);
console.log(animal2);