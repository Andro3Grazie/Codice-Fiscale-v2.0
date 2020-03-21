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
    cf += getNome(cognome, "m") + getNome(nome, "n") + anno + getMese() + getGiorno() + getComune();
    cf += carattereDiVerifica();

    $("input[name=nomeSmartphone]").prop("disabled", true);
    $("input[name=cognomeSmartphone]").prop("disabled", true);
    $("#div-selectSmartphone").show();
    $("select[name=sessoSmartphone]").hide();
    $("#div-selectSmartphone").html("<p>" + $("select[name=sessoSmartphone]").val() + "</p>");
    $("input[name=luogoNascitaSmartphone]").prop("disabled", true);
    $("input[name=provinciaNascitaSmartphone]").prop("disabled", true);
    $("input[name=dataNascitaSmartphone]").prop("disabled", true);

    $(".div-button").html(`
    <div class="col-auto">
        <div class="input-group mb-2">
            <p type="text"  class="form-control"><span>${cf}</span></p>
        </div>
    </div>`);
}
