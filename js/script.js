/* ESERCIZIO
1 - Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100).
2 - Da lì parte un timer di 30 secondi.
3 - Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// funzione per generare numeri casuali

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// tramite al ciclo while vado a prendermi 5 numeri casuali attraverso la funzione getRandomInt e li inserisco nel mio array numeriCasuali
const numeriCasuali = [];

while(numeriCasuali.length <= 4){
    let numero = getRandomInt(1, 100);
    if (!numeriCasuali.includes(numero)){
        numeriCasuali.push(numero);
    }
}
console.log(numeriCasuali);

// trasformo l'array in modo più leggibile con join
let numeriUtente = numeriCasuali.join('-');
console.log(numeriUtente);

// vado a stampare l'array di numeri casuali all'interno del mio div app
let app = document.getElementById('app');
    app.innerHTML = `<h1>
                        Memorizza questi numeri ${numeriUtente}
                     </h1>`;
let h2 = document.createElement('h2');
h2.style.color = 'red';

// creo una funzione timeout che mi va a nascondere div app dopo 30 secondi, mettendo anche un timer ansiogeno
let tempo = 4;
const timer = setInterval(hideOnBush, 1000);
function hideOnBush(){
    tempo = tempo - 1;
    console.log(tempo);
    h2.innerHTML = '';
    let textInfo = document.createTextNode(`Ti rimangono solo: ${tempo} secondi`);
    h2.appendChild(textInfo);
    app.append(h2);
    if (tempo === 0){
        clearInterval(timer);
        app.classList.add('d-none')
        inserisciNumeri();
    }
}

// mi creo dei prompt per inserire i numeri e li salvo in un array numeriInseriti

let  numeriInseriti = [];

function inserisciNumeri(){
    while(numeriInseriti.length <= 4){
        let num = parseInt(prompt('Inserisci un numero, no duplicati'));
        if (!numeriInseriti.includes(num)){
            numeriInseriti.push(num);
        } else {
            alert('Non inserire duplicati')
        }
    }
console.log('numeriInseriti è ' + numeriInseriti)
confronto();
}

// vediamo quanto è bravo l'utente e comunico i risultati
let confrontoFinale = [];

function confronto(){
     for (let i = 0; i <= numeriCasuali.length; i++){
        if (numeriInseriti.includes(numeriCasuali[i])){
            confrontoFinale.push(numeriCasuali[i])
     }

}
console.log('Questi sono i numeri identici ' + confrontoFinale);
let risultato = confrontoFinale.join('-');
console.log(risultato);
app.innerHTML = '';
app.classList.remove('d-none');
if (risultato.length === 0){
    app.innerHTML = `<h1>
                    Non hai azzeccato nessun nessun numero....
                    </h1>`;
} else {
    app.innerHTML = `<h1>
                    I numeri identici inseriti sono ${risultato}
                    </h1>`;
}
}

