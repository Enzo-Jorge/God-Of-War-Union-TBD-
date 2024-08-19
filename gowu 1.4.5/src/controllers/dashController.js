// Arquivo criado em 02/07/2024 e finalizado em 04/07/2024

var dashModel = require("../models/dashModel");

function inserirDados(req, res) {
    var id = req.body.idServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var quiz_atual = req.body.quiz_atualServer;

    if (acertos == undefined && erros == undefined) {
        res.status(400).send("Seus acertos e erros estão undefined!");
    } else if (quiz_atual == undefined) {
        res.status(400).send("Seu quiz está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        dashModel.inserirDados(id, acertos, erros, quiz_atual
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir os dados no banco! Erro:",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

  /* finalizado em 25/07/2024 */

function resultadosGerais(req, res) {
    var id = req.params.idServer;

    console.log('Puxando os acertos e erros presentes em ambos os quizzes.');

    dashModel.resultadosGerais(id
    )
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os resultados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    inserirDados,
    resultadosGerais
}