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

// genero array contenente i numeri casuali

const numeriCasuali = [];

// ora tramite al ciclo while vado a prendermi 5 numeri casuali attraverso la funzione getRandomInt e li inserisco nel mio array numeriCasuali

while(numeriCasuali.length <= 4){
    let numero = getRandomInt(1, 100);
    if (!numeriCasuali.includes(numero)){
        numeriCasuali.push(numero);
    }
}
console.log(numeriCasuali);