let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("apertou o botao 1");
});
btn1.addEventListener("mouseup", function(){
    console.log("soutou o botao 1");
});

btn2.addEventListener("dblclick", function(){
    console.log("double click no botao 2");
});
btn2.addEventListener("contextmenu", function(e){
    
    e.preventDefault();
    console.log("Click esquerdo do mouse");

});