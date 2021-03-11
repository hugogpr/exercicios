class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    };

    get getRaca(){
        return this.raca;
    };
    set setRaca(value){
        this.raca = value;
    };

    get getCor(){
        return this.cor;
    };
    set setCor(cor){
        this.cor = cor;
    };

}

let golden = new Cachorro('Golden Retriever','Indefinida');
console.log(golden);

golden.setCor = "amarelo";

console.log(golden.getCor);