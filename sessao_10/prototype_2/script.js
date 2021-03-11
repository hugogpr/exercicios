let pessoa = {
    nome:'',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    },
}


let novaPessoa = Object.create(pessoa);
novaPessoa.setNome('Carlos');

let novaPessoa2 = Object.create(pessoa);
novaPessoa2.setNome('Elaine');

let novaPessoa3 = Object.create(pessoa);
novaPessoa3.setNome('Ricardo');

console.log(pessoa);

console.log(novaPessoa);
console.log(novaPessoa2);
console.log(novaPessoa3);