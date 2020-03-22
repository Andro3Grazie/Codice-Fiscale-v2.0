var cf = "";
var emptySpace = false;
function getCognome() {
    var cognome = document.getElementsByName("cognome")[0].value;
    if (cognome.length != 0) {
        cognome = rimuoviSpazio(cognome);
        consonanti(cognome, "m");
    }
    else {
        emptySpace = true;
    }
}
function getNome() {
    var nome = document.getElementsByName("nome")[0].value;
    if (nome.length != 0) {
        nome = rimuoviSpazio(nome);
        consonanti(nome, "n");
    }
    else {
        emptySpace = true;
    }
}
function getAnno() {
    var anno = document.getElementsByName("adate")[0].value;
    cf += anno[2] + anno[3];
}
function getMese() {
    var mese = document.getElementsByName("mdate")[0].value;
    switch (mese) {
        case '01':
            cf += "a";
            break;
        case '02':
            cf += "b";
            break;
        case '03':
            cf += "c";
            break;
        case '04':
            cf += "d";
            break;
        case '05':
            cf += "e";
            break;
        case '06':
            cf += "h";
            break;
        case '07':
            cf += "l";
            break;
        case '08':
            cf += "m";
            break;
        case '09':
            cf += "p";
            break;
        case '10':
            cf += "r";
            break;
        case '11':
            cf += "s";
            break;
        case '12':
            cf += "t";
            break;
    }
}
function getGiorno(params) {
    var giorno = document.getElementsByName("gdate")[0].value;
    if (getSesso() == 'f')
        giorno = parseInt(giorno) + 40;
    cf += giorno;
}
function getSesso() {
    return document.getElementsByName("sesso")[0].value;
}

var nome = [];
var cc = [];
var sigla = [];

function getComune() {
    var luogo = document.getElementsByName("luogo")[0].value;
    var provincia = document.getElementsByName("provincia")[0].value;

    luogo = remove_spaces(luogo);
    provincia = remove_spaces(provincia);

    var nome_output = nome.indexOf(luogo.toUpperCase());
    var sigla_output = sigla.indexOf(provincia.toUpperCase());


    if (nome_output != -1 && sigla_output != -1) {
        cf += cc[nome.indexOf(luogo.toUpperCase())];
    }
    else {
        cf = "IMPOSSIBILE TROVARE IL COMUNE!";
    }
}
function carattereDiVerifica() {
    var oddChar = 0; //Dispari
    var evenChar = 0; //Pari

    for (var i = 0; i < cf.length; i++) {
        if (i % 2 == 0) { //Dispari
            switch (cf[i].toUpperCase()) {
                case '0':
                    oddChar += 1;
                    break;
                case '1':
                    oddChar += 0;
                    break;
                case '2':
                    oddChar += 5;
                    break;
                case '3':
                    oddChar += 7;
                    break;
                case '4':
                    oddChar += 9;
                    break;
                case '5':
                    oddChar += 13;
                    break;
                case '6':
                    oddChar += 15;
                    break;
                case '7':
                    oddChar += 17;
                    break;
                case '8':
                    oddChar += 19;
                    break;
                case '9':
                    oddChar += 21;
                    break;
                case 'A':
                    oddChar += 1;
                    break;
                case 'B':
                    oddChar += 0;
                    break;
                case 'C':
                    oddChar += 5;
                    break;
                case 'D':
                    oddChar += 7;
                    break;
                case 'E':
                    oddChar += 9;
                    break;
                case 'F':
                    oddChar += 13;
                    break;
                case 'G':
                    oddChar += 15;
                    break;
                case 'H':
                    oddChar += 17;
                    break;
                case 'I':
                    oddChar += 19;
                    break;
                case 'J':
                    oddChar += 21;
                    break;
                case 'K':
                    oddChar += 2;
                    break;
                case 'L':
                    oddChar += 4;
                    break;
                case 'M':
                    oddChar += 18;
                    break;
                case 'N':
                    oddChar += 20;
                    break;
                case 'O':
                    oddChar += 11;
                    break;
                case 'P':
                    oddChar += 3;
                    break;
                case 'Q':
                    oddChar += 6;
                    break;
                case 'R':
                    oddChar += 8;
                    break;
                case 'S':
                    oddChar += 12;
                    break;
                case 'T':
                    oddChar += 14;
                    break;
                case 'U':
                    oddChar += 16;
                    break;
                case 'V':
                    oddChar += 10;
                    break;
                case 'W':
                    oddChar += 22;
                    break;
                case 'X':
                    oddChar += 25;
                    break;
                case 'Y':
                    oddChar += 24;
                    break;
                case 'Z':
                    oddChar += 23;
                    break;
                default:
                    break;
            }
        }
        else { //Pari
            switch (cf[i].toUpperCase()) {
                case '0':
                    evenChar += 0;
                    break;
                case '1':
                    evenChar += 1;
                    break;
                case '2':
                    evenChar += 2;
                    break;
                case '3':
                    evenChar += 3;
                    break;
                case '4':
                    evenChar += 4;
                    break;
                case '5':
                    evenChar += 5;
                    break;
                case '6':
                    evenChar += 6;
                    break;
                case '7':
                    evenChar += 7;
                    break;
                case '8':
                    evenChar += 8;
                    break;
                case '9':
                    evenChar += 9;
                    break;
                case 'A':
                    evenChar += 0;
                    break;
                case 'B':
                    evenChar += 1;
                    break;
                case 'C':
                    evenChar += 2;
                    break;
                case 'D':
                    evenChar += 3;
                    break;
                case 'E':
                    evenChar += 4;
                    break;
                case 'F':
                    evenChar += 5;
                    break;
                case 'G':
                    evenChar += 6;
                    break;
                case 'H':
                    evenChar += 7;
                    break;
                case 'I':
                    evenChar += 8;
                    break;
                case 'J':
                    evenChar += 9;
                    break;
                case 'K':
                    evenChar += 10;
                    break;
                case 'L':
                    evenChar += 11;
                    break;
                case 'M':
                    evenChar += 12;
                    break;
                case 'N':
                    evenChar += 13;
                    break;
                case 'O':
                    evenChar += 14;
                    break;
                case 'P':
                    evenChar += 15;
                    break;
                case 'Q':
                    evenChar += 16;
                    break;
                case 'R':
                    evenChar += 17;
                    break;
                case 'S':
                    evenChar += 18;
                    break;
                case 'T':
                    evenChar += 19;
                    break;
                case 'U':
                    evenChar += 20;
                    break;
                case 'V':
                    evenChar += 21;
                    break;
                case 'W':
                    evenChar += 22;
                    break;
                case 'X':
                    evenChar += 23;
                    break;
                case 'Y':
                    evenChar += 24;
                    break;
                case 'Z':
                    evenChar += 25;
                    break;
                default:
                    break;
            }
        }
    }

    // console.log("Caratteri dispari = " + evenChar + "\nCaratteri pari = " + oddChar);


    var result = Math.floor((oddChar + evenChar) / 26)
    result = (oddChar + evenChar) - (result * 26);

    var letters = String.fromCharCode(result + 65);
    // console.log("lettera = " + letters);

    cf += letters;
}
function getInfo() {
    cf = "";
    getCognome();
    getNome();
    getAnno();
    getMese();
    getGiorno();
    getComune();
    if (cf != "IMPOSSIBILE TROVARE IL COMUNE!") {
        carattereDiVerifica();
    }

    if (!emptySpace) {
        if (easter()) {
            $('#easter').show();
        } else {
            cookie();
            $('#cookieConsent').show();
            $('#popup1').show();
            printCF();
        }
    } else {
        location.reload()
    }
}
function cookie() {
    $("#bottone-marco").click(function () {
        setTimeout(function () {
            $("#cookieConsent").fadeIn(400);
        }, 0);
        $("#closeCookieConsent, .cookieConsentOK").click(function () {
            $("#cookieConsent").fadeOut(200);
        });
    });
}
function printCF() {
    document.getElementById("popup-content").innerHTML = cf.toUpperCase();
}
function easter() {    
    if (window.innerWidth >= 1920) {
        if (cf.toUpperCase() == "MLILSN01P10H501H") {
            return true;
        }
    }
    if (cf.toUpperCase() == "MLNLSS04L60H501W") {
        console.log("Dream On ~ Aerosmith");
    }
}
function remove_spaces(string) {
    return string.trim();
}
function rimuoviSpazio(string) {
    return string.split(' ').join('');
}
function consonanti(string, bool) {
    var lista_vocali = 'aeiouAEIOU';
    var cons = 0;
    var c = "";

    //Conta le consonanti
    for (var i = 0; i < string.length; i++) {
        if (lista_vocali.indexOf(string[i]) === -1) {
            c += string[i]; //Metti tutte le consonani dentro c 
            cons++;//Incrementa numero consonanti
        }
    }
    //Se e' il nome ed ha piu' di 3 consonanti
    if (bool == "n" && cons > 3) {
        cf += c[0] + c[2] + c[3];
    } else { //Altrimenti
        if (string.length == 3) { //Ha 3 lettere
            cf += string;
        } else if (string.length < 3) { //Meno di 3 lettere
            c = string.length;
            cf += string;
            while (c < 3) {
                cf += "x";
                c++;
            }
        } if (string.length > 3) { //Piu' di 3 lettere e non e' il nome
            if (cons >= 3) {
                for (var i = 0; i < 3; i++) {
                    cf += c[i];
                }
            } else {
                //Inserisci le consonanti
                cf += c;
                for (var i = 0; i < string.length; i++) {
                    //Alle consonanti aggiungi le vocali
                    if (lista_vocali.indexOf(string[i]) !== -1) {
                        cf += string[i];
                        cons++;
                        if (cons >= 3) {
                            break;
                        }
                    }
                }
            }
        }
    }
}