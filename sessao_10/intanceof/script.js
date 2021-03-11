//Verifica se uma classe é uma instancia de outra
class Mamifero{
    constructor(patas){
        this.patas = patas;
    };
};

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas,patas);
        this.raca = raca;
    };
    latir(){
        console.log('au au');
    };
}

console.log(new Cachorro instanceof Mamifero);

console.log('\n');

let coiote = new Mamifero(4);
let pug = new Cachorro(4,'Pug');

console.log(pug instanceof Cachorro);
console.log(coiote instanceof Cachorro);

console.log('\n');

console.log(pug instanceof Mamifero);
console.log(coiote instanceof Mamifero);