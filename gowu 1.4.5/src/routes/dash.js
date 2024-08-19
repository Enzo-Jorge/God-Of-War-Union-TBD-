// Arquivo criado em 02/07/2024 e finalizado em 04/07/2024

var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/inserirDados", function (req, res) {
    dashController.inserirDados(req, res);
});

  /* finalizado em 25/07/2024 */

router.get("/resultadosGerais/:idServer", function (req, res) {
    dashController.resultadosGerais(req, res);
});

module.exports = router;