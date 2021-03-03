let pessoa = {
    "nome":"Ricardo",
    "idade":25,
    "profissao":"programador",
    "hobies":["jogos","livros","filme"]
}
let jsonToString = JSON.stringify(pessoa);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);

console.log(stringToJson.hobies[0]);