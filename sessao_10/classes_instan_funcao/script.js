function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log('Au! Au!');
    };
    return cachorro;
}


let goldenRetriever = criarCachorro('Golden Retriever',4,'amarelo');

let pincher = criarCachorro('Pincher',4,'preto');

let labrador = criarCachorro('Labrador',4,'laranja');

console.log(goldenRetriever);
goldenRetriever.latir();
console.log(pincher);
pincher.latir();
console.log(labrador);
labrador.latir();