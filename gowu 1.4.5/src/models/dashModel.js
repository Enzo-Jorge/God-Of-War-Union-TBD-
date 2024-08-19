// Arquivo criado em 02/07/2024 e finalizado em 04/07/2024

var database = require("../database/config")

function inserirDados(fk_usuario, acertosUsu, errosUsu, fk_quiz
) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirDados():", fk_usuario, acertosUsu, errosUsu, fk_quiz);

    var instrucaoSql = `
        INSERT INTO pontuacao (fk_usuario, acertosUsu, errosUsu, fk_quiz) VALUES (${fk_usuario}, ${acertosUsu}, ${errosUsu}, ${fk_quiz});`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

  /* finalizado em 25/07/2024 */

function resultadosGerais(fk_usuario) {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error; connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resultadosGerais()");

    var instrucaoSql = `
    SELECT sum(acertosUsu) as acertosUsu, sum(errosUsu) as errosUsu FROM pontuacao WHERE fk_usuario = ${fk_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    inserirDados,
    resultadosGerais
}