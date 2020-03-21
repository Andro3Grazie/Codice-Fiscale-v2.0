//Prendi il codice catastale del comune
function getComune() {
    if (nomeLuogo.indexOf(luogoNascita.toLowerCase()) != -1 && sigla.indexOf(provinciaNascita) != -1)
        return codiceCatastale[nomeLuogo.indexOf(luogoNascita.toLowerCase())];
    else
        console.log("IMPOSSIBILE TROVARE IL COMUNE!");
}
//Prende il girono
function getGiorno() {
    //Se e' una donna
    if (sesso == 'F' || sesso == 'Femmina')
        giorno = parseInt(giorno) + 40;//Somma al giorno di nascita "40"
    return giorno;
}
//Prende il cognome
function getMese() {
    switch (mese) {
        case '01':
            return "A";
        case '02':
            return "B";
        case '03':
            return "C";
        case '04':
            return "D";
        case '05':
            return "E";
        case '06':
            return "H";
        case '07':
            return "L";
        case '08':
            return "M";
        case '09':
            return "P";
        case '10':
            return "R";
        case '11':
            return "S";
        case '12':
            return "T";
    }
}
//Prende il nome
function getNome(string, bool) {
    var risultato = "";
    var vowels = "AEIOU";
    //*La srtinga ha piu' di 2 caratteri
    if (string.length > 2) {
        for (var i = 0; i < string.length; i++) {
            if (vowels.indexOf(string[i]) === -1) {
                risultato += string[i]; //risultato <- consonanti
            }
        }
        //Se le consonanti sono meno di 3 [ma ci sono le vocali (*)]
        if (risultato.length < 3) {
            for (var i = 0; i < string.length; i++) {
                if (vowels.indexOf(string[i]) !== -1) {
                    risultato += string[i]; //risultato <- vocali
                    //Se il risultato raggiunge i 3 caratteri
                    if (risultato.length > 2) {
                        return risultato; //Stampa il risultato
                    }
                }
            }
        }
        //Se e' il nome 
        if (risultato.length > 3 && bool == "n") {
            //risultato <- [(prima, terza e quarta) consonante]
            risultato = risultato[0] + risultato[2] + risultato[3];
        }
    } 
    //La srtinga ha meno di 2 caratteri
    else {
        risultato = string;
        //Aggiungiamo la X fino ad arrivare a 3 caratteri totali
        while(risultato.length < 2) {
            risultato += "X"; //risultato <- X
        }
    }
    return risultato;
}
function carattereDiVerifica() {
    var oddChar = 0; //Dispari
    var evenChar = 0; //Pari

    for (var i = 0; i < cf.length; i++) {
        if (i % 2 == 0) { //Dispari
            switch (cf[i]) {
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
            switch (cf[i]) {
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
    result = (oddChar + evenChar) - (Math.floor((oddChar + evenChar) / 26) * 26);
    return String.fromCharCode(result + 65);
}