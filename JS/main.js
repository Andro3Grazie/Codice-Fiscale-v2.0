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
var codiceCatastale = []; //Codice catastale delle città
var comune = []; //sigla delle città

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

    if (nome && cognome && sesso && dataNascita) {
        cf += getGeneralita(cognome, "m") + getGeneralita(nome, "n") + anno + getMese() + getGiorno();
        var cc = getCC();
        if (cc == false) {
            cf = 'IMPOSSIBILE TROVARE IL COMUNE';
        } else {
            cf += cc;
            cf += carattereDiVerifica();
        }   
    } else {
        cf = 'IMPOSSIBILE CALCOLARE IL CODICE';
    }

    $("input[name=nome]").prop("disabled", true);
    $("input[name=cognome]").prop("disabled", true);
    $("#div-select").show();
    $("select[name=sesso]").hide();
    $("#div-select").html("<p>" + $("select[name=sesso]").val() + "</p>");
    $("input[name=luogoNascita]").prop("disabled", true);
    $("input[name=provinciaNascita]").prop("disabled", true);
    $("input[name=dataNascita]").prop("disabled", true);
    
    $(".reset-button").removeClass("display-none");

    if (cf == 'IMPOSSIBILE TROVARE IL COMUNE' || cf == 'IMPOSSIBILE CALCOLARE IL CODICE') {
        $(".div-button").html(
            `<div class="col-auto mx-5">
                <div class="input-group mb-2">
                    <p class="form-control"><span>${cf}</span></p>
                </div>
            </div>`
        );
    } else {
        $(".div-button").html(
            `<div class="col-auto mx-5">
                <div class="input-group mb-2 pop" data-container="body" data-toggle="popover" data-placement="top" data-content="Copiato" onclick="copyToClipboard(cf);">
                    <div class="input-group mb-2" id="copy" data-toggle="tooltip" data-placement="right" title="Copia">
                        <button class="form-control" style="border-radius: 0.25rem 0 0 0.25rem;"><span>${cf}</span></button>
                        <div class="input-group-prepend mouse-click">
                            <span class="input-group-text" style="border-radius: 0 0.25rem 0.25rem 0; border-left-width: 0px;"><i class="fas fa-copy"></i></span>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
    
    activeTooltip();
}

function reset() {
    $("input[name=nome]").prop("disabled", false);
    $("input[name=cognome]").prop("disabled", false);
    $("#div-select").hide();
    $("select[name=sesso]").show();
    $("#div-select").html("<p>" + $("select[name=sesso]").val() + "</p>");
    $("input[name=luogoNascita]").prop("disabled", false);
    $("input[name=provinciaNascita]").prop("disabled", false);
    $("input[name=dataNascita]").prop("disabled", false);

    $(".reset-button").addClass("display-none");

    $(".div-button").html(
        `<button type="button" value="Calcola" class="btn color btn-block text-white button" onclick="calculate()">Calcola il codice fiscale</button>`
    );
}