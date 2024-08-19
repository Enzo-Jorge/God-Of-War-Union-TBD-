// Arquivo criado em 28/07/2024 

var favsModel = require("../models/favsModel");

function favoritarHist(req, res) {
    var id = req.body.idServer;
    var histFav = req.body.histFavServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        favsModel.favoritarHist(id, histFav
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

function favoritarArma(req, res) {
    var id = req.body.idServer;
    var armaFav = req.body.ArmaFavServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        favsModel.favoritarArma(id, armaFav
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

function favoritarMusica(req, res) {
    var id = req.body.idServer;
    var musicaFav = req.body.musicaFavServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        favsModel.favoritarMusica(id, musicaFav
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

function pullHist(req, res) {

    var id = req.params.idServer;

    console.log('Puxando a história favorita do usuário.');

    favsModel.pullHist(id
    )
        .then(function (resultado) {
            if (resultado.length >  0) {
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

function pullWeapon(req, res) {

    var id = req.params.idServer;

    console.log('Puxando a arma favorita do usuário.');

    favsModel.pullWeapon(id
    )
        .then(function (resultado) {
            if (resultado.length >  0) {
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

function pullSong(req, res) {

    var id = req.params.idServer;

    console.log('Puxando a música favorita do usuário.');

    favsModel.pullSong(id
    )
        .then(function (resultado) {
            if (resultado.length >  0) {
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
    favoritarHist,
    favoritarArma,
    favoritarMusica,
    pullHist,
    pullWeapon,
    pullSong
}