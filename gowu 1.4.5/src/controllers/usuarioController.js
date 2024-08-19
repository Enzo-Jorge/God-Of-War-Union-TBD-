var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                            console.warn('nickname: ' + resultadoAutenticar[0].nick)
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        nick: resultadoAutenticar[0].nick,
                                        imgUrl: resultadoAutenticar[0].imgUrl,
                                        // cpf: resultadoAutenticar[0].cpf,
                                        senha: resultadoAutenticar[0].senha,
                                        // aquarios: resultadoAquarios
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            // })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nick = req.body.nickServer;
    // var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    // } else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    } else if (nick == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!")
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, nick
            // empresaId, 
            // cpf
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res) {
    var id = req.body.idServer;
    var nick = req.body.nickServer;
    var imgUrl = req.body.imgUrlServer;
    var bio = req.body.bioServer;

    if(nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if(imgUrl == undefined) {
        res.status(400).send("Sua url está undefined!");
    } else {
        usuarioModel.atualizar(id, nick, imgUrl, bio)
        .then(function (resultado) {
                res.json(resultado)
            }) .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar as mudanças! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

// function atualizar_pagina(req, res) {
//     var id = req.body.idServer;

//     if(id == undefined) {
//         res.status(400).send("Sua id está undefined!")
//     } else {
//         usuarioModel.atualizar_pagina(id)
//         .then(function (resultado) {
//             res.json({
//                 nick: resultado[0].nick,
//                 imgUrl: resultado[0].imgUrl,
//                 bio: resultado[0].bio,
//             })
//         }) .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "\nHouve um erro ao realizar as mudanças! Erro: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
//     }
// }

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    // atualizar_pagina
}