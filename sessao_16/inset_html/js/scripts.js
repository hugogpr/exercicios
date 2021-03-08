let novoElemento = document.createElement("p");
let texto = document.createTextNode("Critica");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);



