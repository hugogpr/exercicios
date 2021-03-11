let p = Promise.resolve(new Error("Algo deu errado"));

console.log('Outro codigo');

console.log(p);

p.then((value) =>{return value + 5})
.catch(reason => console.log("Erro: "+ reason));