class Itens{
    constructor(nome,quant,valorT){
        this.nome = nome;
        this.quant = quant;
        this.valorT = valorT;
    }
    get getNome(){
        return this.nome;
    }
    set setNome(nome){
        this.nome = nome;
    }
    get getQuant(){
        return this.quant;
    }
    set setQuant(quant){
        this.quant = quant;
    }
    get getValorT(){
        return this.valorT;
    }
    set setValorT(valorT){
        this.valorT = valorT;
    }

}
class Carrinho{
    constructor(itens){
        this.lista = [itens];
    }
    get getLista(){
        return this.lista;
    };
    add(item){
        this.lista.push(item);
    };
    remove(nome){
        if(this.lista.include(nome)){
            this.lista.pop(item);
        }
        
    };

}
let a = new Itens('melancia',5,50);
let b = new Itens('maça',10,7.99);
let carrinho = new Carrinho(a);
carrinho.add(b);
console.log(carrinho.getLista)

