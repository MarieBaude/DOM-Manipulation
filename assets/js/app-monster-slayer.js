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
    addLi();
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

function reset () {
    buttonAttack.style.display = 'none';
    buttonSpecialAttack.style.display = 'none';
    buttonHeal.style.display = 'none';
    buttonGiveUP.style.display = 'none';
    sectionText.style.display = 'none';
    buttonStart.style.display = 'inherit';
    let playerHP = 100;
    let monsterHP = 100;
    console.log('player : ' + playerHP, 'monster : ' + monsterHP);
}

function playerAttack () {
    monsterHP -= getRandomNum(3, 10);
}

function monsterAttack () {
    playerHP -= getRandomNum(5, 10);
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function addLi () {
    let liPLayer = document.createElement('li.player-action');
    liPLayer.appendChild(document.createTextNode('Player hit monster for ' + playerHP));
    list.appendChild(liPLayer);
    // li.appendChild(document.createTextNode('\n' + 'Monster hit player for ' + monsterHP));
    // list.appendChild(li);
}