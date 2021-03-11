let a = document.querySelector("h1");

window.addEventListener("keydown", function(e){

    if(e.key == 'q'){
        console.log("Apertou o Q");
        a.style.color ='red';
    }else if(e.key == 'Enter'){
        console.log("Apertou o Enter");
        a.style.color ='blue';
    }

});

window.addEventListener("keyup", function(e){

    if(e.key == 'q'){
        console.log("soltou o Q");
        a.style.color ='black';
    }else if(e.key == 'Enter'){
        console.log("soltou o Enter");
        a.style.color ='black';
    }

});