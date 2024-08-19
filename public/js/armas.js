var armas_lista = ['Lâminas do Caos <a onclick="estrela1()" class="estrela" id="estrela_fav1">☆</a>', 'Lâmina de Ártemis <a onclick="estrela2()" class="estrela" id="estrela_fav2">☆</a>', 'Lâminas de Atena <a onclick="estrela3()" class="estrela" id="estrela_fav3">☆</a>', 'Martelo bárbaro <a onclick="estrela4()" class="estrela" id="estrela_fav4">☆</a>', 'Lança do Destino <a onclick="estrela5()" class="estrela" id="estrela_fav5">☆</a>', 'Lâmina do Olimpo <a onclick="estrela6()" class="estrela" id="estrela_fav6">☆</a>', 'Lâminas do Exílio <a onclick="estrela7()" class="estrela" id="estrela_fav7">☆</a>', 'Garras de Hades <a onclick="estrela8()" class="estrela" id="estrela_fav8">☆</a>', 'Cestos de Nemeia <a onclick="estrela9()" class="estrela" id="estrela_fav9">☆</a>', 'Chicote de Nêmesis <a onclick="estrela10()" class="estrela" id="estrela_fav10">☆</a>', 'Manopla de Zeus <a onclick="estrela11()" class="estrela" id="estrela_fav11">☆</a>', 'Braços de Esparta <a onclick="estrela12()" class="estrela" id="estrela_fav12">☆</a>', 'Machado Leviatã <a onclick="estrela13()" class="estrela" id="estrela_fav13">☆</a>', 'Lança Draupnir <a onclick="estrela14()" class="estrela" id="estrela_fav14">☆</a>'];

var descricao_lista = ['As lâminas do Caos são a arma perfeita para o guerreiro perfeito. Forjadas nas profundezas do Tártaro pelo deus Hefesto sob o comando de Ares, as armas foram entregues a Kratos após sua jura de sangue com Ares na beira de sua morte.', 'Fornecida pela própria deusa caçadora que a possui para ajudar Kratos em seus desafios no Templo de Pandora, a Lâmina de Ártemis é uma grande e elegante espada que tem uma força descomunal atrelada a ela.', 'As lâminas de Atena são uma versão mais poderosa que as Lâminas do Caos dadas a Kratos pela própria deusa da sabedoria após matar seu irmão, Ares, e atingir assim, o status de "O novo deus da guerra".', 'Revivido pelas Irmãs do Destino em uma tentativa de parar Kratos em sua jornada para alcançá-las, o rei bárbaro: Alrik, novamente sucumbe a ira do espartano, assim como anos atrás. Deixando para trás sua mais valiosa possesão, seu martelo, para Kratos usá-lo em sua jornada adiante.', 'Após uma intensa batalha aérea, Kratos pula de seu pégasus e derrota um general morto-vivo, empalando a arma que carregava em seu grifo. Em um momento futuro, encontrando o grifo e tomando a poderosa arma empalada em sua carcaça: A Lança do Destino.', 'Forjada durante a grande guerra, a Lâmina do Olimpo foi o ultimato dos deuses contra os gigantes. Usando toda sua força, Zeus conseguiu banir todos os gigantes para as maiores profundezas do Tártaro com apenas um golpe desta arma. É a criação perfeita olimpiana.', 'Dadas ao Kratos após cair no Rio Estige depois da traíção da titã Gaia, as Lâminas do Exílio são um direto aprimoramento das Lâminas de Atena feito pela própria deusa, agora em sua forma fantasmagórica.', 'Tomadas das mãos do próprio rei do submundo, as Garras de Hades são garras amarradas em correntes que são capazes de trazer almas para o combate ou a roubar de qualquer um a qual ela se prenda.', 'Dado de presente a Hércules após a sua vitória contra o Leão de Nemeia, os Cestos de Nemeia são a definição de força bruta, podendo romper através dos cristais mais duros de toda a Grécia.', 'Forjado pelas mãos de Hefesto apartir da pedra que Cronos, o titã pai de todos os deuses, engoliu pensando ser seu filho, e com o intuito de matar Kratos, sua criação virou contra seu criador. Sendo uma ótima corrente de eletricidade e o fim do deus ferreiro.', 'Criada a pedido do próprio Zeus e pelas mãos de Hefesto, a Manopla de Zeus foi feita com o intuito de dar a força suficiente para que Zeus pudesse acorrentar os poderosos titãs nas profundezas do Tártaro.', '"Os Braços de Esparta", assim eram chamados o escudo e lança de Kratos que o espartano usava enquanto ainda era um general.', 'Criado pelos irmãos Huldra e dado de presente pelos anões para Feye, a justa, e embuído com magia de gelo, o Machado Leviatã foi forjado com o intuito de parar a fúria do poderoso Mjölnir de Thor. Após a morte de Feye, quem carrega seu machado é Kratos, seu marido.', 'Criada a partir do artefato Draupinir que a possibilita se duplicar, abençoada pela Dona da forja e tendo seu lenço amarrado em sua volta feito do sangue do próprio espartano, a Lança Draupnir é criada como último recurso para a ameaça eminente do Ragnarok.']

var background_lista = ['https://i.pinimg.com/originals/78/8e/b3/788eb3fe3a2f75d898c900a425bab962.jpg', 'https://images3.alphacoders.com/428/4285.jpg', '', '', '', '', '', ''];

var distancia = 0;
var contagem = 0;

function avancar() {
    if(distancia > -1300) {
    distancia -= 100;
    idimg1.style.marginLeft = `${distancia}%`;

    contagem++;

    arma_jogo.innerHTML = armas_lista[contagem];
    descricao_jogo.innerHTML = descricao_lista[contagem];

    // Adicionado em 28/07/2024
    weaponPull();

    }
}

function retroceder() {
    if(distancia < 0) {
        distancia += 100;
        idimg1.style.marginLeft = `${distancia}%`;

        contagem--;
        arma_jogo.innerHTML = armas_lista[contagem];
        descricao_jogo.innerHTML = descricao_lista[contagem];
    
        // Adicionado em 28/07/2024
        weaponPull();

    }
}