let novoElemento = document.createElement("h1");
let texto = document.createTextNode("Critica");

novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);