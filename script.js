console.log('JS OK');

/* Scrivi un applicazione che sia in grado di generare una serie di numeri randomici.
L'utente, tramite 3 input, deve avere la possibilità di definire:
- Quanti box generare
- il numero minimo di generazione dei numeri random
- il numero massimo di generazione dei numeri random
Cliccando sul tasto "genera", vengono generati i box con i parametri specificati dall'utente 
e andremo a colorare di VERDE i numeri pari e di ROSSO i numeri dispari.
Crea inoltre un bottone reset che svuota i valori negli input e cancella i box generati.
*/

/* 
1 - Prendo gli elementi dal DOM;
2 - Aggancio l'event listener al button genera;
    2a - Recupero valori degli input;
    2a2 - Validazione degli input raccolti;
    2b - Creo dei numeri randomici, partendo dai parametri specificati dall'utente;
    2c - Assegno il colore verde ai numeri pari e il colore rosso ai numeri dispari;
    2d - Inserisco i numeri randomici all'interno del box;
    2e - Mostro la row dei boxes che di default ha d-none;
3 - Aggancio l'event listener al reset button;
    3a - Svuoto i campi;
    3b - Copro la row dei boxes, ristabilendo il d-none;
*/


// 1 - Prendo gli elementi dal DOM;
const inputBox = document.getElementById('num-boxes');
const inputMin = document.getElementById('min-num');
const inputMax = document.getElementById('max-num');
const btnCreate = document.getElementById('btn-create');
const btnReset = document.getElementById('btn-reset');



