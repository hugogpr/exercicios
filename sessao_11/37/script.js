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

}/* com json
class Carrinho{
    constructor(itens){
        this.lista = [JSON.stringify(itens)];
    }
    get getLista(){
        return this.lista;
    };
    add(itens){
        this.lista.push(JSON.stringify(itens));
    };
    remove(itens){
        let veri = JSON.stringify(itens);

        if(this.lista.includes(veri)){
            this.lista.pop(veri);
        }
        
    };

} */
class Carrinho{
    constructor(itens){
        this.lista = [itens];
    }
    get getLista(){
        return this.lista;
    };
    add(itens){
        this.lista.push(itens);
    };
    remove(itens){
        if(this.lista.includes(itens)){
            this.lista.pop(itens);
        }
        
    };

}

let a = new Itens('melancia',5,50);
let b = new Itens('maça',10,7.99);
let c = new Itens('maça',10,7.99);
let carrinho = new Carrinho(a);
carrinho.add(b);
console.log(carrinho.getLista)
console.log('\n');

carrinho.remove(b);

console.log(carrinho.getLista)
console.log('\n');