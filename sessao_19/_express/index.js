let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('primeira rota com Express');
});
app.get('/teste',function(req,res){
    res.send('Testando rota');
});
app.listen(3000, function(){
    console.log("aplicação esta funcionando na porta 3000")
});