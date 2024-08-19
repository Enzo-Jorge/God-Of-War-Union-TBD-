var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT *
        FROM usuario WHERE email = '${email}' AND senha = '${senha}';
        `;
        // cpf 
        // fk_empresa as empresaId,
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, nick
    // empresaId, 
    // cpf
) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, nick, imgUrl) VALUES ('${nome}', '${email}', '${senha}', '${nick}', 'https://i.pinimg.com/originals/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg');`;
    // fk_empresa, 
    // '${empresaId}', '${cpf}'
        // cpf
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

async function atualizar(id, nick, imgUrl, bio) {
    var atualizacao = `
        UPDATE usuario SET nick = '${nick}', imgUrl = '${imgUrl}', bio = '${bio}' WHERE id = ${id};
    `;

    var instrucaoSql = `SELECT * FROM usuario WHERE id = ${id};`;
    
    await database.executar(atualizacao)
    return database.executar(instrucaoSql);
    // setTimeout(() => {
    // }, 100);
}

// function atualizar_pagina(id) {
//     var instrucaoSql = `SELECT * FROM usuario WHERE id = ${id};`;

//     return database.executar(instrucaoSql);
// }

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    // atualizar_pagina
};