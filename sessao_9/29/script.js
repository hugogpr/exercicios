let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus);
console.log(onibus.janelas);