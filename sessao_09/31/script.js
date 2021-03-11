let nomes = [   
    'Hugo', 
    'Matheus', 
    'Joao', 
    'Carlos', 
    'Ricardo',
    'Pedro'
];
let numeros = [1,25,39];

function verifica(arr){
    if (arr.length>5) {
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}
verifica(nomes);
verifica(numeros);