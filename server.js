const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // analisa a requisição e cria o objeto req.bpdy
app.use(bodyParser.urlencoded({ extended:true}));

app.get("/", (req,res) => {
    res.json({ message: "Servidor funcionando, aguardando rotas"});
});

app.listen(4300,(function(err){
    if(!err){
        console.log("App iniciado na porta 4300")
    }else{
        console.log("Algo ocorreu na abertura do servidor, erro: ", err);
    }
}))



