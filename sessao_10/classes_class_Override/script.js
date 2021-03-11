class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

Cachorro.prototype.raca = 'SRD';

console.log(labrador);

console.log(Cachorro.prototype.raca);