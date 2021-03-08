let elemento = document.querySelector('#titulo-principal');
//checando o tamanho do elemento
 console.log('largura: '+ elemento.offsetWidth);//considera as bordas de largura
 console.log('altura: '+ elemento.offsetHeight);//considera as bordas de altura

 console.log('largura: '+ elemento.clientWidth);//não considera as bordas de largura
 console.log('altura: '+ elemento.clientHeight);//não considera as bordas de altura