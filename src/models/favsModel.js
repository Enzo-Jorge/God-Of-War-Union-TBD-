// Arquivo criado em 28/07/2024 

var database = require("../database/config")

function favoritarHist(id, histFav
) {
    console.log("ACESSEI O FAVS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function favoritar():", id, histFav);

    var instrucaoSql = `
    UPDATE usuario SET fk_historias = ${histFav} WHERE id = ${id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function favoritarArma(id, armaFav
) {
    console.log("ACESSEI O FAVS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function favoritar():", id, armaFav);

    var instrucaoSql = `
    UPDATE usuario SET fk_armas = ${armaFav} WHERE id = ${id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function favoritarMusica(id, musicaFav
) {
    console.log("ACESSEI O FAVS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function favoritar():", id, musicaFav);

    var instrucaoSql = `
    UPDATE usuario SET fk_musicas = ${musicaFav} WHERE id = ${id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pullHist(id) {
    var instrucaoSql = `
    SELECT idHistoria, tituloHist FROM historias JOIN usuario ON fk_historias = idHistoria WHERE id = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pullWeapon(id) {
    var instrucaoSql = `
    SELECT idArma, arma FROM armas JOIN usuario ON fk_armas = idArma WHERE id = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pullSong(id) {
    var instrucaoSql = `
    SELECT idMusica, musica FROM musicas JOIN usuario ON fk_musicas = idMusica WHERE id = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    favoritarHist,
    favoritarArma,
    favoritarMusica,
    pullHist,
    pullWeapon,
    pullSong
}