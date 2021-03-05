async function somar(a,b) {
    return a + b;
}

somar(2,2).then(function(value){
    console.log(value);
})

somar(2,4).then(value => console.log(value));