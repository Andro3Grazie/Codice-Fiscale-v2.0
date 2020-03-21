CREATE DATABASE CodiceFiscale;

CREATE TABLE utente (
    id INT(4) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(254),
    cognome VARCHAR(254),
    sesso VARCHAR (1),
    luogoNascita VARCHAR (254),
    provinciaNascita VARCHAR(2),
    dataNascita DATE,
    cf varchar(30)
);