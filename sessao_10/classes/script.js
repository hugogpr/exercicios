let cachorro = {
    patas: 4,
    raca:'SRD',
    latir: function(){
        console.log("Au! Au!")
    },

    getPatas: function(){
        return this.patas;
    },
    setPatas: function(novaPatas){
        this.patas = novaPatas;
    },
    getRaca: function(){
        return this.raca;
    },
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    }


}


let goldenRetriever = Object.create(cachorro);
goldenRetriever.setRaca('Golden Retriever');
goldenRetriever.setPatas(4);

let pincher = Object.create(cachorro);
pincher.setRaca('Pincher');
pincher.setPatas(4);

let labrador = Object.create(cachorro);
labrador.setRaca('Labrador');
labrador.setPatas(4);

console.log(goldenRetriever);
goldenRetriever.latir();
console.log(pincher);
pincher.latir();
console.log(labrador);
labrador.latir();