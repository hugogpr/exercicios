let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.addEventListener("focus", function(){
    console.log("entrou no input");
});

input1.addEventListener("blur", function(){
    console.log("saiu do input");
});