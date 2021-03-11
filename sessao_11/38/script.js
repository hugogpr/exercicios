
class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    };
    get getRua(){
        return this.rua;
    };
    set setRua(rua){
        this.rua = rua;
    };
    get getBairro(){
        return this.bairro;
    };
    set setBairro(bairro){
        this.bairro = bairro;
    };
    get getCidade(){
        return this.cidade;
    };
    set setCidade(cidade){
        this.cidade = cidade;
    };
    get getEstado(){
        return this.estado;
    };
    set setEstado(estado){
        this.estado = estado;
    };
}

let endereco = new Endereco('rua qualquer','vila nova','Londrina','Parana');
console.log(endereco);

endereco.setRua ='rua das flores';
console.log(endereco);