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
    2b - Creo il ciclo for per il numero di box;
    2b2 - Creo dei numeri randomici, partendo dai parametri specificati dall'utente;
    2c - Assegno il colore verde ai numeri pari e il colore rosso ai numeri dispari;
    2d - Inserisco i numeri randomici all'interno del box;
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
const boxesRow = document.getElementById('boxes-row');

// 2 - Aggancio l'event listener al button genera;
btnCreate.addEventListener('click', function () {
    // 2a - Recupero valori degli input;
    const boxNumber = parseInt(inputBox.value.trim());
    console.log(boxNumber);

    const minNumber = parseInt(inputMin.value.trim());
    console.log(minNumber);

    const maxNumber = parseInt(inputMax.value.trim());
    console.log(maxNumber);

    // 2a2 - Validazione degli input raccolti;
    if(!boxNumber || isNaN(boxNumber) || boxNumber < 1 || boxNumber > 20) {
        alert('Devi inserire un numero di box tra 1 e 20');
        return;
    }

    if(!minNumber || isNaN(minNumber) || minNumber < 1 || minNumber > 29) {
        alert('Devi inserire un min random tra 1 e 29');
        return;
    }

    if(!maxNumber || isNaN(maxNumber) || maxNumber < 2 || maxNumber > 30) {
        alert('Devi inserire un max random tra 2 e 30');
        return;
    }

    // 2b/2b2/2d - Creo il ciclo for per il numero di box e i numeri randomici;
    
    let content = '';
    for (let i = 0; i < boxNumber; i++) {
        let randomNumbers = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        console.log(randomNumbers);
        // 2c - Assegno il colore verde ai numeri pari e il colore rosso ai numeri dispari;
        if (randomNumbers % 2 === 0) {
            content += `<div class="col-3 bg-success">${randomNumbers}</div>`;
        } else {
            content += `<div class="col-3 bg-danger">${randomNumbers}</div>`;
        }
    }

    boxesRow.innerHTML = content;



});
