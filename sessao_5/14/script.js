let x = 0;

while (x<=50) {
    
    if(x==0){
        console.log(`${x} não é impar ou par`);
    }
    else if(x%2==0){
        console.log(`${x} é par`);
    }else{
        console.log(`${x} é impar`);
    }
    x++;
}