-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

-- Script de criação de tabela adicionado em 03/07/2024

CREATE DATABASE gowu;

USE gowu;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	nick VARCHAR(50),
	nick VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	imgUrl VARCHAR(100),
	bio VARCHAR(200)
);

CREATE TABLE post (
	idPost INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(300),
	conteudo VARCHAR(2000),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE comentario (
	idComm INT PRIMARY KEY AUTO_INCREMENT,
	fk_post INT,
	FOREIGN KEY (fk_post) REFERENCES post(idPost)
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	conteudoComm VARCHAR(2000)
);

create table quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	nomeQuiz VARCHAR(45)
);

create table pontuacao (
	idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	fk_quiz INT,
	FOREIGN KEY (fk_quiz) REFERENCES quiz(idQuiz),
	acertosUsu INT,
	errosUSU INT
);

insert into quiz values ('God of War #1'), ('God of War #2');

create table historias (
idHistoria int primary key auto_increment,
tituloHist varchar(60)
);

create table musicas (
idMusica int primary key auto_increment,
musica varchar(60)
);

create table armas (
idArma int primary key auto_increment,
musica varchar(60)
);

insert into historias values
(default, 'God Of War'),
(default, 'God Of War 2'),
(default, 'God Of War 3'),
(default, 'God Of War: Chains Of Olympus'),
(default, 'God Of War: Ghost Of Sparta'),
(default, 'God Of War: Ascencion'),
(default, 'God Of War (2018)'),
(default, 'God Of War Ragnarok');

insert into musicas values
(default, 'The Vengeful Spartan'),
(default, 'Hydra Attacks'),
(default, 'Climbing Net'),
(default, "Ares' Battle"),
(default, 'Colossus of Rhodes'),
(default, 'The End Begins'),
(default, 'The Glory of Sparta'),
(default, 'The Bathhouse'),
(default, 'Zeus vs Kratos'),
(default, 'Overture'),
(default, 'Main Menu GOW 3'),
(default, 'Melody of Pandora'),
(default, 'Hercules Fight'),
(default, 'Brothers of Blood'),
(default, 'Divine Retribution'),
(default, 'God Of War'),
(default, 'Lullaby of the Giants'),
(default, 'The Reach of Your Godhood'),
(default, 'God Of War Ragnarok'),
(default, 'Remembering Faye'),
(default, 'Blood Upon The Snow');

insert into armas values
(default, 'Lâminas do Caos'),
(default, 'Lâmina de Ártemis'),
(default, 'Lâminas de Atena'),
(default, 'Martelo bárbaro'),
(default, 'Lança do Destino'),
(default, 'Lâmina do Olimpo'),
(default, 'Lâminas do Exílio'),
(default, 'Garras de Hades'),
(default, 'Cestos de Nemeia'),
(default, 'Chicote de Nêmesis'),
(default, 'Manopla de Zeus'),
(default, 'Braços de Esparta'),
(default, 'Machado Leviatã'),
(default, 'Lança Draupnir');