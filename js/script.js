"use strict";

function nomeFunzione() {
    let scopeFunzione = 'parent';
    for (let i = 1; i <= 10; i++) {
        console.log(scopeFunzione);
        const pippo = 'personaggio Disney';
    }
}



//funzione di callback
function stampa(nome, cognome) {
    let nomeCognome = nome + ' ' + cognome;
    document.writeln(nomeCognome);
}

//Posso dare dei valori di default dentro le parentesi della funzione
//siccome i valori della funzione li definisco dopo, metto print per adesso
function nomeFunzione(nome, cognome, print) {
    nome = nome.toUpperCase();
    cognome = cognome.toUpperCase();
    print(nome, cognome);
}

//Qui definisco i valori della funzione e siccome il terzo è un valore(in questo caso di una funzione, metto stampa. Che è il valore di un altra funzione.)
nomeFunzione('', '', stampa);
///////////////////////////////

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const numeroColonne = 10;

let difficulty = 100;

//Stampare griglia
function stampareGriglia() {

    let app = document.getElementById('app');
    app.innerHTML = '';

    let row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center align-content-center');


    let cols = creaColonne(numeroColonne);

    app.innerHTML = cols;
}

//Creo colonne

function creaColonne() {
    let difficulty = document.querySelector('#difficulty');
    let play = document.querySelector('#play');

    if (difficulty.selectedIndex == 0) {

        for (let i = 0; i <= 100; i++) {
            let cols= '';
            cols += `<div class="col col-1 debug">${i}</div>
        `
            
        }
        
    }
    play.onclick = (event) => {
        event.preventDefault()
        console.log(difficulty.selectedIndex)

    }
}
//Creo righe
function creaRighe(numeroRighe) {

    let rows = '';
    let numeriUsati = [];
    while (numeriUsati.length < numeroRighe) {
        let numeroCella = getRandomInt(0, numeroColonne);
        if (!numeriUsati.includes(numeroCella)) {
            numeriUsati.push(numeroCella);
            rows += `<div class="row justify-content-center align-content-center">${numeroCella}</div>
        `
        }
    }
    return rows;
}

document.getElementById('play').addEventListener('click', stampareGriglia);
//////////////////


document.getElementById('app').addEventListener('click', function () {


})


///Così funziona. Se sposto il richiamo della funzione prima, non funziona
let miaFunzione = function () {
    console.log('ciao')
}
miaFunzione();


///Così funziona anche se la chiamo prima
miaFunzione1();

function miaFunzione1() {
    console.log('ciao')
}
/////////////

let miaFunzione2 = () => 3 + 4;
let somma = miaFunzione2();
console.log(somma)