var database = require("../database/config")

function postar(titulo, conteudo, fk_usuario
) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function postar():", titulo, conteudo, fk_usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO post (titulo, conteudo, fk_usuario) VALUES ('${titulo}', '${conteudo}', ${fk_usuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function AtualizarPosts() {
    var instrucaoSql = `
    SELECT idPost, titulo, conteudo, nick, imgUrl FROM post JOIN usuario ON fk_usuario = id;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function abrir_post(idPost) {
    var instrucaoSql = `
    SELECT conteudoComm, nick, imgUrl FROM comentario JOIN usuario ON fk_usuario = id WHERE fk_post = ${idPost} ORDER BY idComm ASC;
    `;

    return database.executar(instrucaoSql);
} 

function comentar(fk_usuario, fk_post, conteudoComm
) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function comentar():", fk_usuario, fk_post, conteudoComm);

    var instrucaoSql = `
    INSERT INTO comentario (fk_usuario, fk_post, conteudoComm) VALUES (${fk_usuario}, ${fk_post}, '${conteudoComm}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Adicionado em 29/07/2024

function pullQtdPosts(id) {
    var instrucaoSql = `
    SELECT count(*) AS numPosts FROM post WHERE fk_usuario = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    postar,
    AtualizarPosts,
    comentar,
    abrir_post,

// Adicionado em 29/07/2024
    pullQtdPosts
};