/* VARIABLES 
-----------------------------
*/
const playerBar = document.querySelector('.you-life');
const monsterBar = document.querySelector('.monster-life');

const buttonStart = document.querySelector('.new-start-monster');
const buttonAttack = document.querySelector('.attack');
const buttonSpecialAttack = document.querySelector('.special-attack');
const buttonHeal = document.querySelector('.heal');
const buttonGiveUP = document.querySelector('.give-up');

const sectionText = document.querySelector('.text');
const list = document.querySelector('.action-list');

let playerHP = 100;
let monsterHP = 100;


/* EVENTS
-----------------------------
*/
buttonStart.addEventListener('click', function() {
    appearButton();
});

buttonGiveUP.addEventListener('click', function() {
    reset();
});

buttonAttack.addEventListener('click', function() {
    playerAttack();
    monsterAttack();
    addLiPlayer();
    addLiMonster();
    checkWinner();
});

buttonSpecialAttack.addEventListener('click', function() {
    playerSpecialAttack();
    monsterAttack();
    addLiPlayerSpecial();
    addLiMonster();
    checkWinner();
});

buttonHeal.addEventListener('click', function() {
    playerHeal();
    monsterAttack();
    addLiPlayerHeal();
    addLiMonster();
    checkWinner();
});

/* FUNCTIONS 
-----------------------------
*/
function appearButton () {
    buttonStart.style.display = 'none';
    buttonAttack.style.display = 'inherit';
    buttonSpecialAttack.style.display = 'inherit';
    buttonHeal.style.display = 'inherit';
    buttonGiveUP.style.display = 'inherit';
    sectionText.style.display = 'inherit';
}

function playerAttack () {
    monsterHP -= getRandomNum(3, 10);
}

function playerSpecialAttack () {
    monsterHP -= getRandomNum(10, 20);
}

function monsterAttack () {
    playerHP -= getRandomNum(5, 10);
}

function playerHeal () {
    monsterHP += 10;
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function addLiPlayer () {
    let liPLayer = document.createElement('li.player-action');
    liPLayer.appendChild(document.createTextNode('Player hit monster for ' + playerHP));
    list.appendChild(liPLayer);
}

function addLiMonster () {
    let liMonster = document.createElement('li.monster-action');
    liMonster.appendChild(document.createTextNode('\n' + 'Monster hit player for ' + monsterHP));
    list.appendChild(liMonster);
}

function addLiPlayerSpecial () {
    let liPLayerSpecial = document.createElement('li.player-action');
    liPLayerSpecial.appendChild(document.createTextNode('Player hit hard monster for ' + playerHP));
    list.appendChild(liPLayerSpecial);
}

function addLiPlayerHeal () {
    let liPLayerHeal = document.createElement('li.player-action-heal');
    liPLayerHeal.appendChild(document.createTextNode('Player heals for ' + playerHP));
    list.appendChild(liPLayerHeal);
}

function reset () {
    buttonAttack.style.display = 'none';
    buttonSpecialAttack.style.display = 'none';
    buttonHeal.style.display = 'none';
    buttonGiveUP.style.display = 'none';
    sectionText.style.display = 'none';
    buttonStart.style.display = 'inherit';
    playerHP = 100;
    monsterHP = 100;
    list.innerHTML = '';
}

function checkWinner () {
    if (playerHP == 0) {
        alert('perdu');
    } if (monsterHP == 0) {
        alert('gagné');
    } 
}
