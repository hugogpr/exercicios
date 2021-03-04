function tipoDeVar(a){
    if(typeof(a)=='string'){
        console.log(`A variavel(${a}) é uma String`);
    }else if(typeof(a)== 'number'){
        console.log(`A variavel(${a}) é um Number`);
    }else if(typeof(a)== 'boolean'){
        console.log(`A variavel(${a}) é Boolean`);
    }else{
        console.log(`Variavel (${a}) nao é Valida`);
    }
}

tipoDeVar("nome");
tipoDeVar(5);
tipoDeVar(true);
tipoDeVar(0);
tipoDeVar(NaN);
tipoDeVar();