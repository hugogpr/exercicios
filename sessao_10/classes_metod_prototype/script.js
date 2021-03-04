function Cachorro(raca){
    this.raca = raca;
}
Cachorro.prototype.uivar = function(){
    console.log('Au! Au! Auuuuuuuuuuuuuuuu!');
}

let husky = new Cachorro('husky');
console.log(husky);
husky.uivar();