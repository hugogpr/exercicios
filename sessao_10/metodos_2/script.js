let pessoa = {
    nome:'',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    },
}
pessoa.setNome('Hugo');
console.log(pessoa.getNome());

let cachorro = {
    raca:'SRD',
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    getRaca: function(){
        return this.raca;
    }
}

console.log(cachorro.getRaca());
cachorro.setRaca('Fofucho');

console.log(cachorro.getRaca());