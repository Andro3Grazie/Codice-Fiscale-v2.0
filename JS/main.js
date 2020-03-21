//Dichiarazione variabili (auto-esplicative)
var cf = ""; //CodiceFiscale
var nome = "";
var cognome = "";
var sesso = "";
var luogoNascita = "";
var provinciaNascita = "";
var dataNascita = "";
var anno = "";
var mese = "";
var giorno = "";
var nomeLuogo = []; //Nomi delle città 
var codiceCatastale = []; //codice catastale delle città
var sigla = []; //sigla delle città

function getInfo() {
    //Inizializza a "vuoto" la variabile
    cf = "";
    
    //Prendi il nome, togli i spazzi e fallo maiuscolo
    nome = ((document.getElementsByName("nome")[0].value).split(' ').join('')).toUpperCase();
    
    //Prendi il cognome, togli i spazzi e fallo maiuscolo
    cognome = ((document.getElementsByName("cognome")[0].value).split(' ').join('')).toUpperCase();
    
    //Prendi il sesso
    sesso = document.getElementsByName("sesso")[0].value;
    
    //Prendi il luogo di nascita e fallo minuscolo
    luogoNascita = (document.getElementsByName("luogoNascita")[0].value).toLowerCase().trim();
    
    //Prendi il provincia di nascita e falla maiuscola
    provinciaNascita = (document.getElementsByName("provinciaNascita")[0].value).toUpperCase().trim();
    
    //Prendi la data
    dataNascita = document.getElementById("bDate").value;
    
    //Prendi  le ultime due cifre dell'anno
    anno = dataNascita.substring(2, 4);
    
    //Prendi le cifre del mese
    mese = dataNascita.substring(5, 7);

    //Prndi le cifre dei giorni
    giorno = dataNascita.substring(8, 10);
}
//Funzione principale
function calculate() {
    getInfo();
    console.log(luogoNascita);
    console.log(provinciaNascita);
    
    cf += getNome(cognome, "m") + getNome(nome, "n") + anno + getMese() + getGiorno() + getComune();
    cf += carattereDiVerifica();
    console.log(cf);
    $("input[name=nome]").prop("disabled", true);
    $("input[name=cognome]").prop("disabled", true);
    $("#div-select").show();
    $("select[name=sesso]").hide();
    $("#div-select").html("<p>" + $("select[name=sesso]").val() + "</p>");
    $("input[name=luogoNascita]").prop("disabled", true);
    $("input[name=provinciaNascita]").prop("disabled", true);
    $("input[name=dataNascita]").prop("disabled", true);

    $(".div-button").html(`
    <div class="col-auto mx-5">
        <div class="input-group mb-2">
            <p type="text"  class="form-control"><span>${cf}</span></p>
        </div>
    </div>`);

    // CopyToClipboard
//     $(".div-button").html(`<div class="col-auto mx-5">
//     <div class="input-group mb-2">
//       <p type="text"  class="form-control"><span id="cfcompleto">${cf}</span></p>
//       <div class="input-group-prepend">
//         <div class="input-group-text copy-font" onclick="copycf();">Copia</div>
//       </div>
//     </div>
//   </div>`);
}