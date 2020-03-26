function getInfoSmartphone() {
    //Inizializza a "vuoto" la variabile
    cf = "";
    
    //Prendi il nome, togli i spazzi e fallo maiuscolo
    nome = ((document.getElementsByName("nomeSmartphone")[0].value).split(' ').join('')).toUpperCase();
    
    //Prendi il cognome, togli i spazzi e fallo maiuscolo
    cognome = ((document.getElementsByName("cognomeSmartphone")[0].value).split(' ').join('')).toUpperCase();
    
    //Prendi il sesso
    sesso = document.getElementsByName("sessoSmartphone")[0].value;
    
    //Prendi il luogo di nascita e fallo minuscolo
    luogoNascita = (document.getElementsByName("luogoNascitaSmartphone")[0].value).toLowerCase().trim();
    
    //Prendi il provincia di nascita e falla maiuscola
    provinciaNascita = (document.getElementsByName("provinciaNascitaSmartphone")[0].value).toUpperCase().trim();
    
    //Prendi la data
    dataNascita = document.getElementById("bDateSmartphone").value;

    //Prendi  le ultime due cifre dell'anno
    anno = dataNascita.substring(2, 4);

    //Prendi le cifre del mese
    mese = dataNascita.substring(5, 7);

    //Prndi le cifre dei giorni
    giorno = dataNascita.substring(8, 10);

}
//Funzione principale
function calculateSmartphone() {
    getInfoSmartphone();
    
    if (nome && cognome && sesso && dataNascita) {
        cf += getGeneralita(cognome, "m") + getGeneralita(nome, "n") + anno + getMese() + getGiorno();
        var cc = getCC();
        if (cc == false) {
            cf = 'COMUNE NON TROVATO';
        } else {
            cf += cc;
            cf += carattereDiVerifica();
            //CIN = Control Internal Number --> Codice di controllo
            CIN();
        }   
    } else {
        cf = 'IMPOSSIBILE CALCOLARLO';
    }

    $("input[name=nomeSmartphone]").prop("disabled", true);
    $("input[name=cognomeSmartphone]").prop("disabled", true);
    $("#div-selectSmartphone").show();
    $("select[name=sessoSmartphone]").hide();
    var valsel;
    if ($("select[name=sessoSmartphone]").val() === null) {
        valsel = "<p style='color: #6c757d;'>Sesso</p>"
    } else {
        valsel = "<p style='color: #495057;'>" + $('select[name=sessoSmartphone]').val() + "</p>";//#6c757d;
    }
    $("#div-selectSmartphone").html(valsel);
    $("input[name=luogoNascitaSmartphone]").prop("disabled", true);
    $("input[name=provinciaNascitaSmartphone]").prop("disabled", true);
    $("input[name=dataNascitaSmartphone]").prop("disabled", true);

    $(".reset-button").removeClass("display-none");

    $(".div-button").html(`
    <div class="col-auto">
        <div class="input-group mb-2">
            <p type="text" class="form-control"><span>${cf}</span></p>
        </div>
    </div>`);
}
function resetSmartphone() {
    if (cognome != true) {
        $("input[name=nomeSmartphone]").prop("disabled", false);
        $("input[name=cognomeSmartphone]").prop("disabled", false);
        $("#div-selectSmartphone").hide();
        $("select[name=sessoSmartphone]").show();
        $("#div-selectSmartphone").html("<p>" + $("select[name=sessoSmartphone]").val() + "</p>");
        $("input[name=luogoNascitaSmartphone]").prop("disabled", false);
        $("input[name=provinciaNascitaSmartphone]").prop("disabled", false);
        $("input[name=dataNascitaSmartphone]").prop("disabled", false);
    }
    if (cognome == true) {
        cognome = false;
        $("#mostra").addClass("display-none");
        $("#ricalcola").removeClass("display-none");
        $(".div-button").html(`
            <div class="col-auto">
                <div class="input-group mb-2">
                    <p type="text" class="form-control"><span>${nome}</span></p>
                </div>
            </div>`);
    }else {
        $(".reset-button").addClass("display-none");

        $(".div-button").html(
            `<button type="button" value="Calcola" class="btn color btn-block text-white button inputs" onclick="calculateSmartphone()">Calcola</button>`
        );
    }
}
