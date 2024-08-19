var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/atualizar", function(req, res) {
    usuarioController.atualizar(req, res);
});

router.post("/atualizar_pagina", function(req, res) {
    usuarioController.atualizar_pagina(req, res);
});

module.exports = router;