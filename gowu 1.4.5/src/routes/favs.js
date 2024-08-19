// Arquivo criado em 28/07/2024 

var express = require("express");
var router = express.Router();

var favsController = require("../controllers/favsController");

router.post("/favoritarHist", function (req, res) {
    favsController.favoritarHist(req, res);
});

router.post("/favoritarArma", function (req, res) {
    favsController.favoritarArma(req, res);
});

router.post("/favoritarMusica", function (req, res) {
    favsController.favoritarMusica(req, res);
});

router.get("/pullHist/:idServer", function (req, res) {
    favsController.pullHist(req, res)
});

router.get("/pullWeapon/:idServer", function (req, res) {
    favsController.pullWeapon(req, res)
});

router.get("/pullSong/:idServer", function (req, res) {
    favsController.pullSong(req, res)
});

module.exports = router;