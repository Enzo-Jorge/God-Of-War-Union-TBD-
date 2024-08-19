var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

//Recebendo os dados do html e direcionando para a função postar de postController.js
router.post("/postar", function (req, res) {
    postController.postar(req, res);
})

router.post("/AtualizarPosts", function (req, res) {
    postController.AtualizarPosts(req, res);
})

router.post("/comentar", function (req, res) {
    postController.comentar(req, res);
});

router.post("/abrir_post", function (req, res) {
    postController.abrir_post(req, res);
});

// Adicionado em 29/07/2024

router.get("/pullQtdPosts/:idServer", function (req, res) {
    postController.pullQtdPosts(req, res)
});

module.exports = router;