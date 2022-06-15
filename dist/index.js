"use strict";
const express = require('express');
const app = express();
app.listen('3000');
//Middleware
app.use(express.json());
const novoProduto = {
    nome: "Playstation 4",
    descricao: "Console Sony PS4",
    fornecedor: "Sony",
    quantidade: 10
};
//Post
app.route('/').post((req, res) => {
    console.log(req.body.nome);
    // res.send()
    //res.send(novoProduto)
});
//Get
app.route('/').get((req, res) => res.send(novoProduto));
app.route('/').put((req, res) => {
});
//Delete
app.route('/:id').delete((req, res) => {
    res.send(req.params.id);
});
