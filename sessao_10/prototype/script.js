//Prototype é o objeto gerado a partir de outro objeto ou 'Classe'

let pessoa = {
    nome:'',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    },
}

let cachorro = {
    raca:'SRD',
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    getRaca: function(){
        return this.raca;
    }
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa)== Object.prototype);

console.log(pessoa.hasOwnProperty('nome'));
console.log(pessoa.hasOwnProperty('idade'));