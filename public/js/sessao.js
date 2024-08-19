// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    // var nome = sessionStorage.NOME_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;
    var bio = sessionStorage.BIO_USUARIO;

    console.log(nick);
    // var cpf = sessionStorage.CPF_USUARIO;

    // var b_usuario = document.getElementById("b_usuario");
    var b_nick = document.getElementById("b_nick");
    var d_nick = document.getElementById("d_nick");
    var b_bio = document.getElementById("b_bio");
    // var b_cpf = document.getElementById("b_cpf");

    if (email != null 
        // && nome != null
         && nick != null
        // && cpf != null,
    ) {
        // b_usuario.innerHTML = nome;
        b_nick.innerHTML = nick;
        d_nick.innerHTML = nick;
        b_bio.innerHTML = bio;
        // b_cpf.innerHTML = cpf;
    } else {
        window.location = "../html/login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../html/login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

