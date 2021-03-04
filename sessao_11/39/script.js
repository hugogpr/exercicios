class Carro{
    constructor(marca, cor, fuel){
        this.marca = marca;
        this.cor = cor;
        this.fuel = fuel;
    }
    dirigir(){
        if (this.fuel<=0) {
            console.log("o carro nao liga vc esta sem combustivel");
        }else{
            this.fuel--;
            console.log('Voce andou 10km! combustivel '+this.fuel+'/5');
        }
    }
    abastecer(qtd){
        if(qtd+this.fuel < 5){
            this.fuel += qtd;
            console.log('voce abasteceu '+qtd+'l e tem '+this.fuel+'l de combustivel');
        }else if((qtd+this.fuel) === 5){
            console.log("Voce encheu o tanque");
        }else{
            this.fuel = 5;
            console.log("Capacidade do tanque excedida! voce tem 5l ");
        }

    }
}
let carro = new Carro('BMW','Preto',1);
console.log(carro);
carro.dirigir();
carro.dirigir();
carro.abastecer(4);
carro.abastecer(1);
carro.abastecer(4);
carro.abastecer(1);

