// servidor
// http

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Oi Turma!");
});

app.listen(3000, function(erro){
    console.log(erro);
    console.log("servidor iniciado")
});