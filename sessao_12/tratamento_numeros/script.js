function checarNumeros(num) {
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("por favor passe só numeros para o console");
    }else{
        return (number)
    }
}
checarNumeros(5);
checarNumeros('5');
checarNumeros('sda')