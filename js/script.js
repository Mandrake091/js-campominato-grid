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











document.getElementById('play').addEventListener('click', stampareGriglia);



//Stampare griglia
function stampareGriglia() {
    let app = document.getElementById('app');
    app.innerHTML = '';
    let row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center align-content-center');
    let cols = creaColonne();
    app.append(row)
    row.innerHTML = cols;
    cols = document.getElementsByClassName('col');

    function active() {
        let cellsBg = document.querySelectorAll('.col');
        return cellsBg;
    }
    let colora = active();
    for (let c = 0; c < colora.length; c++) {
        let i = c;
        colora[c].addEventListener('click', function active() {
            colora[i].classList.add('active')
        })
    }
}


stampareGriglia();
//////////////////

//Funzione click



//Creo colonne
function creaColonne() {
    let cols = '';

    const difficulty = document.querySelector('#difficulty');
    console.log(difficulty.selectedIndex)

    if (difficulty.selectedIndex === 0) {
        let cells = 100;
        let app = document.getElementById('app').classList.add('easy');
        app = document.getElementById('app').classList.remove('hard', 'crazy');
        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`

        }
        return cols;

    } else if (difficulty.selectedIndex === 1) {
        let cells = 81;
        let app = document.getElementById('app').classList.add('hard');
        app = document.getElementById('app').classList.remove('easy', 'crazy');

        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`
        }
        for (let c = 0; c < cells.length; c++) {
            let i = c;
            cells[c].addEventListener('click', function () {
                cells[i].classList.add('active')
            })
        }
        return cols;

    } else {
        let cells = 49;
        let app = document.getElementById('app').classList.add('crazy');
        app = document.getElementById('app').classList.remove;
        ('easy', 'hard');

        for (let i = 1; i <= cells; i++) {
            cols += `<div class="col col-1 debug">${i}</div>`
        }
        return cols;
    }
}