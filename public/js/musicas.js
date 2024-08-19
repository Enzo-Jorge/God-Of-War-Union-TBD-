var titulo_lista = ['The Vengeful Spartan <a onclick="estrela1()" class="estrela" id="estrela_fav1">☆</a>', 'Hydra Attacks <a onclick="estrela2()" class="estrela" id="estrela_fav2">☆</a>', 'Climbing Net <a onclick="estrela3()" class="estrela" id="estrela_fav3">☆</a>', 'Ares&#180; Battle <a onclick="estrela4()" class="estrela" id="estrela_fav4">☆</a>', 'Colossus of Rhodes <a onclick="estrela5()" class="estrela" id="estrela_fav5">☆</a>', 'The End Begins <a onclick="estrela6()" class="estrela" id="estrela_fav6">☆</a>', 'The Glory of Sparta <a onclick="estrela7()" class="estrela" id="estrela_fav7">☆</a>', 'The Bathhouse <a onclick="estrela8()" class="estrela" id="estrela_fav8">☆</a>', 'Zeus vs Kratos <a onclick="estrela9()" class="estrela" id="estrela_fav9">☆</a>', 'Overture <a onclick="estrela10()" class="estrela" id="estrela_fav10">☆</a>', 'Main Menu GOW 3 <a onclick="estrela11()" class="estrela" id="estrela_fav11">☆</a>', 'Melody of Pandora <a onclick="estrela12()" class="estrela" id="estrela_fav12">☆</a>', 'Hercules Fight <a onclick="estrela13()" class="estrela" id="estrela_fav13">☆</a>', 'Brothers of Blood <a onclick="estrela14()" class="estrela" id="estrela_fav14">☆</a>', 'Divine Retribution <a onclick="estrela15()" class="estrela" id="estrela_fav15">☆</a>', 'God Of War <a onclick="estrela16()" class="estrela" id="estrela_fav16">☆</a>', 'Lullaby of the Giants <a onclick="estrela17()" class="estrela" id="estrela_fav17">☆</a>', 'The Reach of Your Godhood <a onclick="estrela18()" class="estrela" id="estrela_fav18">☆</a>', 'God Of War Ragnarok <a onclick="estrela19()" class="estrela" id="estrela_fav19">☆</a>', 'Remembering Faye <a onclick="estrela20()" class="estrela" id="estrela_fav20">☆</a>', 'Blood Upon The Snow <a onclick="estrela21()" class="estrela" id="estrela_fav21">☆</a>'];

var sinopse_lista = ['OST de God Of War 1', 'OST de God Of War 1', 'OST de God Of War 1', 'OST de God Of War 1', 'OST de God Of War 2', 'OST de God Of War 2', 'OST de God Of War 2', 'OST de God Of War 2', 'OST de God Of War 2', 'OST de God Of War 3', 'OST de God Of War 3', 'OST de God Of War 3', 'OST de God Of War 3', 'OST de God Of War 3', 'OST de God Of War 3', 'OST de God Of War (2018)', 'OST de God Of War (2018)', 'OST de God Of War (2018)', 'OST de God Of War Ragnarok', 'OST de God Of War Ragnarok', 'OST de God Of War Ragnarok']

var background_lista = ['https://i.pinimg.com/originals/78/8e/b3/788eb3fe3a2f75d898c900a425bab962.jpg', 'https://images3.alphacoders.com/428/4285.jpg', '', '', '', '', '', ''];

var distancia = 0;
var contagem = 0;

function avancar() {
    if(distancia > -2000) {
    distancia -= 100;
    idimg1.style.marginLeft = `${distancia}%`;

    contagem++;

    titulo_jogo.innerHTML = titulo_lista[contagem];
    sinopse_jogo.innerHTML = sinopse_lista[contagem];

    // Adicionado em 28/07/2024
    songPull();

    }
}

function retroceder() {
    if(distancia < 0) {
        distancia += 100;
        idimg1.style.marginLeft = `${distancia}%`;

        contagem--;
    titulo_jogo.innerHTML = titulo_lista[contagem];
    sinopse_jogo.innerHTML = sinopse_lista[contagem];

    // Adicionado em 28/07/2024
    songPull();

    }
}