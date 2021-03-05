//let promessa = Promise.resolve(4+8);

//console.log('Algum código');

//promessa.then((value) => console.log(`A soma é ${value}`));

let p = Promise.resolve(5);

console.log('Outro codigo');

console.log(p);

p.then((value) =>{return value + 5})
.then((value) => {console.log(value)});