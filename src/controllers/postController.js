var postagemModel = require("../models/postagemModel");

function postar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("Seu conteudo está undefined!");
    } else {
        postagemModel.postar(titulo, conteudo, id
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a postagem! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function AtualizarPosts(req, res) {
    postagemModel.AtualizarPosts()
    .then(function (resposta) {
        if(resposta.length >= 1) {
            res.status(200).json(resposta);
        }
    });
}

function abrir_post(req, res) {
    var idPost = req.body.idPostServer;

    if(idPost == undefined) {
        res.status(400).send("Seu post está undefined!");
    } else {
        postagemModel.abrir_post(idPost)
        .then(function (resultado) {
            var nome_usuario = [];
            var img_usuario = [];
            var comm_usuario = [];

            for(var index = 0; index < resultado.length; index++) {
                nome_usuario.push(resultado[index].nick);
                img_usuario.push(resultado[index].imgUrl);
                comm_usuario.push(resultado[index].conteudoComm);
            }

            res.json({
                nick: nome_usuario,
                imgUrl: img_usuario,
                conteudoComm: comm_usuario
            })
        })
    }
}

function comentar(req, res) {
    var conteudoComm = req.body.conteudoCommServer;
    var id = req.body.idServer;
    var idPost = req.body.idPostServer;

    if (conteudoComm == undefined) {
        res.status(400).send("Seu conteudo está undefined!");
    } else {
        postagemModel.comentar(id, idPost, conteudoComm
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// Adicionado em 29/07/2024

function pullQtdPosts(req, res) {
    var id = req.params.idServer;

    console.log('Puxando a quantidade de posts do usuário.');

    postagemModel.pullQtdPosts(id
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
    postar,
    AtualizarPosts,
    comentar,
    abrir_post,
// Adicionado em 29/07/2024
    pullQtdPosts
}