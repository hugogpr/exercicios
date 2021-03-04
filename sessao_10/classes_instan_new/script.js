function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log('Auuuuu!');
    };
}
let husky = new Cachorro('husky',4,'branco');
console.log(husky);
husky.uivar();