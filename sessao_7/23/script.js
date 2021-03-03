function checarTamanho(texto){
    if (texto.length > 10) {
        console.log("Texto muito longo");
        
    }else{
        console.log("Texto dentro do limite");
    }
    console.log(texto.length)
}

checarTamanho("Texto dentro do limite");
checarTamanho("Long Text")