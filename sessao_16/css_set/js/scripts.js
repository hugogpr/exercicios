let elemento = document.querySelector('#titulo-principal');

let i = elemento.clientWidth;


setInterval(function() {
        
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'black';
    
    if(i>200){

        elemento.style.width = `${i}px`;
        i -= 5;

    }else{
        clearInterval()
    }
    
},12);