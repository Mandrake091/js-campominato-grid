"use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min) + min);
}
const BOMB_NUMBER = 16;
const bombs = [];
let MAX_ATTEMPT;
let ATTEMPTS = 0;
/////////////////
document.getElementById('play').addEventListener('click', setLevel);


function setLevel(event) {
    const level = document.getElementById('difficulty').value;
    let numSquare;
    switch (level) {
        case '1':
        default:
            numSquare = 100;
            break;
        case '2':
            numSquare = 81;
            break;
        case '3':
            numSquare = 49;
            break;
    }

    let cellPerSide = Math.sqrt(numSquare);
    generateBomb(numSquare);
    generaGriglia(numSquare, cellPerSide);
}

function generateBomb(numSquare) {
    MAX_ATTEMPT = numSquare - BOMB_NUMBER;
    while (bombs.length < BOMB_NUMBER || bombs.length <= 0) {
        let bombNumber = getRandomInt(1, numSquare);
        if (!bombs.includes(bombNumber)) {
            bombs.push(bombNumber);
        }
    }
    console.log(bombs)
}

function generaGriglia(numSquare, cellPerSide) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let row = document.createElement('div');
    row.setAttribute('class', 'gridrow');
    for (let i = 1; i <= numSquare; i++) {
        const square = generaCella(i, cellPerSide);
        row.append(square)
    }
    app.append(row)
}

function generaCella(numCell, cellPerSide) {
    let square = document.createElement('div');
    square.setAttribute('class', 'box');
    square.style.width = `calc(100% / ${cellPerSide})`;
    square.style.height = `calc(100% / ${cellPerSide})`;
    square.classList.add('pointer');
    square.innerHTML = `<span>${numCell}</span>`
    square.addEventListener('click', coloraCella);
    return square;
}

function coloraCella() {
    let num = parseInt(this.innerText);
    ATTEMPTS++;
    if (bombs.includes(num)) {
        this.style.backgroundColor = "red";
        //this.innerHTML = `<img src=""`
        gameOver();
    } else {
        this.style.backgroundColor = "rgb(0 225 101)";
    }

    console.log(this.innerText)

    this.classList.remove('pointer');

    this.style.color = "rgb(0 0 0)";
    this.removeEventListener("click", coloraCella)
}

function gameOver() {

}




































///////////////////////////

/*function getRandomInt(min, max) {

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
}*/