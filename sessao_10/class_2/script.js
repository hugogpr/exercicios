class Cachorro{
    constructor(raca){
        this.raca = raca;
    };

    latir(){
        console.log('Au! Au!');
    };
}

//add atributo fora da classe
Cachorro.prototype.patas = 4;

let dog = new Cachorro('pincher');

console.log(dog.raca);
console.log(dog.patas);
dog.latir();