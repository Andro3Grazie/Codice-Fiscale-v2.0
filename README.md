# Codice-Fiscale-v2.0

#### Cos'è e come si calcola:

Il codice fiscale è un codice utilizzato ai fini fiscali ed amministrativi per identificare in modo univoco i cittadini italiani.
E' un codice alfanumerico di 16 caratteri, generato da un semplice algoritmo, introdotto nel 1973 da un decreto del Presidente della Repubblica (Decreto 605 del 29/09/1973).

Per il calcolo del codice fiscale si procede così:
- le prime tre lettere del codice fiscale sono prese dal cognome
- le successive tre dal nome
- di seguito troviamo le ultime due cifre dell'anno di nascita
- una lettera per il mese (A = Gennaio, B, C, D, E, H, L, M, P, R, S, T = Dicembre)
- il giorno di nascita, per le donne si aggiunge 40
- Codice catastale del comune di nascita, composto da quattro caratteri
- Carattere di controllo, per verificare la correttezza del codice generato.

Per maggiori dettagli e' consigliabile consultare il DM del 12/03/1974, presente anche all'inidirizzo che segue: http://www.dossier.net/utilities/codice-fiscale/decreto1974_2227.html.

È possibile che due persone abbiano lo stesso codice fiscale ma, in questo caso, l'Agenzia delle Entrate provvede a sostituire alcuni caratteri per risolvere l'ambiguità.

L'algoritmo da me utilizzato segue, per la generazione del codice fiscale, le regole del DM del 12/03/1974.
