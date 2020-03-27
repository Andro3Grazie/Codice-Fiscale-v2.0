//Prendi il codice catastale del comune
function getCC() {
    // console.log(nomeLuogo.indexOf(luogoNascita)); //3534
    // console.log(nomeLuogo.indexOf(luogoNascita, (nomeLuogo.indexOf(luogoNascita) + 1))); //3535
    
    // console.log(comune[nomeLuogo.indexOf(luogoNascita)]); //CO
    // console.log(comune[nomeLuogo.indexOf(luogoNascita, (nomeLuogo.indexOf(luogoNascita) + 1))]); //TN
    
    //Controlla se esiste
    if (nomeLuogo.indexOf(luogoNascita) != -1 && comune.indexOf(provinciaNascita) != -1) {
        //Controlla se il comune corrisponde alla citta'
        if (comune[nomeLuogo.indexOf(luogoNascita)] == provinciaNascita) {
            //Restituisci il codice catastale della citta' (del comune appropriato)
            return codiceCatastale[nomeLuogo.indexOf(luogoNascita)];
        }else if (comune[nomeLuogo.indexOf(luogoNascita, (nomeLuogo.indexOf(luogoNascita) + 1))] == provinciaNascita) {
            return codiceCatastale[nomeLuogo.indexOf(luogoNascita, (nomeLuogo.indexOf(luogoNascita) + 1))];
        } 
        else {
            //Il comune non corrisponde alla citta'
            // console.log("Il comune non corrisponde alla citta'");
            return false;
        }
    } else {
        //Citta' e/o comune non esistono
        // console.log("Citta' e/o comune non esistono");
        return false;
    }
}
//Prende il girono
function getGiorno() {
    //Se e' una donna
    if (sesso == 'F' || sesso == 'FEMMINA')
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
//Prende il nome o cognome
function getGeneralita(string, bool) {
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
        //Se non e' il nome
        else if (risultato.length > 3) {
            risultato = risultato = risultato[0] + risultato[1] + risultato[2];
        }
    } 
    //La srtinga ha meno di 2 caratteri
    else {        
        risultato = string;
        //Aggiungiamo la X fino ad arrivare a 3 caratteri totali
        while(risultato.length < 3) {
            risultato += "X"; //risultato <- X
        }
    }
    return risultato;
}
function CIN() {
    if (cf == 'MLILSN01P10H501H') {
        cognome = true;
        nome = cf;
        $("#ricalcola").addClass("display-none");
        $("#mostra").removeClass("display-none");

        cf = '<i class="fas fa-cubes"></i> BENTORNATO <i class="fas fa-cubes"></i>';
    }
    if (cf == 'RSNTZN72R69D286E') {
        cognome = true;
        nome = cf;
        $("#ricalcola").addClass("display-none");
        $("#mostra").removeClass("display-none");

        cf = '<i class="fas fa-heart"></i><i class="fas fa-heart"></i> BAVA VIRGIL <i class="fas fa-heart"></i><i class="fas fa-heart"></i>';
    }
    if (cf == 'PPRSRA02C68H501B') {
        cognome = true;
        nome = cf;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var birthday = '2020-3-28';

        $("#ricalcola").addClass("display-none");
        $("#mostra").removeClass("display-none");

        if(date == birthday) {
            cf = 'AUGURI SARETTA <i class="fas fa-heart"></i> <i class="fas fa-birthday-cake"></i>';
        }
    }
    if (cf == 'CPTMRK03L56H501I') {
        cognome = true;
        nome = cf;
        $("#ricalcola").addClass("display-none");
        $("#mostra").removeClass("display-none");

        cf = '<i class="fas fa-heart"></i> <i class="far fa-star"></i> STELLINA <i class="far fa-star"></i> <i class="fas fa-heart"></i>';
    }
}
function carattereDiVerifica() {
    var sum = 0;

    for (var i = 0; i < cf.length; i++) {
        if (i % 2 == 0) { //Dispari
            switch (cf[i]) {
                case '0':
                    sum += 1;
                    break;
                case '1':
                    sum += 0;
                    break;
                case '2':
                    sum += 5;
                    break;
                case '3':
                    sum += 7;
                    break;
                case '4':
                    sum += 9;
                    break;
                case '5':
                    sum += 13;
                    break;
                case '6':
                    sum += 15;
                    break;
                case '7':
                    sum += 17;
                    break;
                case '8':
                    sum += 19;
                    break;
                case '9':
                    sum += 21;
                    break;
                case 'A':
                    sum += 1;
                    break;
                case 'B':
                    sum += 0;
                    break;
                case 'C':
                    sum += 5;
                    break;
                case 'D':
                    sum += 7;
                    break;
                case 'E':
                    sum += 9;
                    break;
                case 'F':
                    sum += 13;
                    break;
                case 'G':
                    sum += 15;
                    break;
                case 'H':
                    sum += 17;
                    break;
                case 'I':
                    sum += 19;
                    break;
                case 'J':
                    sum += 21;
                    break;
                case 'K':
                    sum += 2;
                    break;
                case 'L':
                    sum += 4;
                    break;
                case 'M':
                    sum += 18;
                    break;
                case 'N':
                    sum += 20;
                    break;
                case 'O':
                    sum += 11;
                    break;
                case 'P':
                    sum += 3;
                    break;
                case 'Q':
                    sum += 6;
                    break;
                case 'R':
                    sum += 8;
                    break;
                case 'S':
                    sum += 12;
                    break;
                case 'T':
                    sum += 14;
                    break;
                case 'U':
                    sum += 16;
                    break;
                case 'V':
                    sum += 10;
                    break;
                case 'W':
                    sum += 22;
                    break;
                case 'X':
                    sum += 25;
                    break;
                case 'Y':
                    sum += 24;
                    break;
                case 'Z':
                    sum += 23;
                    break;
                default:
                    break;
            }
        }
        else { //Pari
            switch (cf[i]) {
                case '0':
                    sum += 0;
                    break;
                case '1':
                    sum += 1;
                    break;
                case '2':
                    sum += 2;
                    break;
                case '3':
                    sum += 3;
                    break;
                case '4':
                    sum += 4;
                    break;
                case '5':
                    sum += 5;
                    break;
                case '6':
                    sum += 6;
                    break;
                case '7':
                    sum += 7;
                    break;
                case '8':
                    sum += 8;
                    break;
                case '9':
                    sum += 9;
                    break;
                case 'A':
                    sum += 0;
                    break;
                case 'B':
                    sum += 1;
                    break;
                case 'C':
                    sum += 2;
                    break;
                case 'D':
                    sum += 3;
                    break;
                case 'E':
                    sum += 4;
                    break;
                case 'F':
                    sum += 5;
                    break;
                case 'G':
                    sum += 6;
                    break;
                case 'H':
                    sum += 7;
                    break;
                case 'I':
                    sum += 8;
                    break;
                case 'J':
                    sum += 9;
                    break;
                case 'K':
                    sum += 10;
                    break;
                case 'L':
                    sum += 11;
                    break;
                case 'M':
                    sum += 12;
                    break;
                case 'N':
                    sum += 13;
                    break;
                case 'O':
                    sum += 14;
                    break;
                case 'P':
                    sum += 15;
                    break;
                case 'Q':
                    sum += 16;
                    break;
                case 'R':
                    sum += 17;
                    break;
                case 'S':
                    sum += 18;
                    break;
                case 'T':
                    sum += 19;
                    break;
                case 'U':
                    sum += 20;
                    break;
                case 'V':
                    sum += 21;
                    break;
                case 'W':
                    sum += 22;
                    break;
                case 'X':
                    sum += 23;
                    break;
                case 'Y':
                    sum += 24;
                    break;
                case 'Z':
                    sum += 25;
                    break;
                default:
                    break;
            }
        }
    }

    return (String.fromCharCode((sum) - (Math.floor((sum) / 26) * 26) + 65));
}
function copyToClipboard (string) {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = string;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =         
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
    }
};

