var titulo_lista = ['God Of War <a onclick="estrela1()" class="estrela" id="estrela_fav1">☆</a>', 'God Of War 2 <a onclick="estrela2()" class="estrela" id="estrela_fav2">☆</a>', 'God Of War 3 <a onclick="estrela3()" class="estrela" id="estrela_fav3">☆</a>', 'God Of War: Chains Of Olympus <a onclick="estrela4()" class="estrela" id="estrela_fav4">☆</a>', 'God Of War: Ghost Of Sparta <a onclick="estrela5()" class="estrela" id="estrela_fav5">☆</a>', 'God Of War: Ascension <a onclick="estrela6()" class="estrela" id="estrela_fav6">☆</a>', 'God Of War (2018) <a onclick="estrela7()" class="estrela" id="estrela_fav7">☆</a>', 'God Of War Ragnarok <a onclick="estrela8()" class="estrela" id="estrela_fav8">☆</a>'];

var sinopse_lista = ['Kratos é atormentado com memórias de seus atos e faz um trato de servir aos outros deuses do Olimpo por dez anos. Cansado de servir, convoca Atena e, ela afirma que o perdoará por seus atos se ele realizar uma última tarefa: matar Ares. Para isso ele deve encontrar e usar a Caixa de Pandora.', 'Após derrotar Ares e conseguir sua vingança, Kratos ascende ao Olimpo e torna-se o novo Deus da Guerra. Mas seus problemas estão só começando: humilhado e nova mente traído, o Fantasma de Esparta descobre o verdadeiro jogo dos deuses, no qual é apenas uma peça. Agora eles devem pagar.', 'Reignificando a Grande Guerra, Kratos sobe ao Monte Olimpo até ser abandonado pela titã Gaia. Guiado pelo espírito de Atena, Kratos luta contra monstros, deuses e Titãs em uma busca por Pandora, sem a qual ele não pode abrir a Caixa de Pandora, derrotar Zeus e acabar com o reinado dos deuses do Olimpo.', 'Se passando na metade do período de dez anos em que Kratos serviu os deuses, Chains of Olympus começa com Kratos sendo despachado para a cidade da Ática para ajudar a defendê-la do exército persa invasor. Logo após sua chegada, o espartano vê um basilisco subindo pelas muralhas da cidade e o persegue.', 'Kratos se tornou deus da guerra, mas suas visões de pesadelo não o deixaram. Em uma dessas visões, ele vê sua mãe, Callisto, sendo mantida em Atlântida, o domínio do deus do mar, Poseidon.', 'Seis meses se passaram desde que Kratos jurou vingança a Ares, após ser manipulado a matar sua própria esposa e filha pelo prórpio deus da guerra, quebrando sua jura de sangue e sendo capturado pelas três fúrias, que o torturam todo dia.', 'A história começa após a morte da segunda esposa de Kratos e mãe de Atreus, Faye. Seu último desejo era que suas cinzas fossem espalhadas no pico mais alto dos nove reinos nórdicos. Antes de iniciar sua jornada, Kratos é confrontado por um homem misterioso com poderes divinos.', 'Três anos após os eventos do jogo anterior, o Fimbulwinter, um grande inverno que abrange três verões, está chegando ao fim o que dará início à profecia do Ragnarök. Kratos e Atreus voltam da caçada para casa depois de escapar por pouco de uma emboscada de Freya.']

var background_lista = ['https://i.pinimg.com/originals/78/8e/b3/788eb3fe3a2f75d898c900a425bab962.jpg', 'https://images3.alphacoders.com/428/4285.jpg', '', '', '', '', '', ''];

var distancia = 0;
var contagem = 0;

function avancar() {
    if(distancia > -700) {
    distancia -= 100;
    idimg1.style.marginLeft = `${distancia}%`;

    contagem++;

    sinopse_jogo.innerHTML = sinopse_lista[contagem];
    
    // Adicionado em 28/07/2024
    histPull();

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
    histPull();
    
    }
}