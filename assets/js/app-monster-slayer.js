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

let playerDamage;
let monsterDamage;
let playerSpeDamage;


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
    updateSizeBarPlayer();
    updateSizeBarMonster();
    monsterAttack();
    addLiPlayer();
    addLiMonster();
    checkWinner();
});

buttonSpecialAttack.addEventListener('click', function() {
    playerSpecialAttack();
    monsterAttack();
    updateSizeBarPlayer();
    updateSizeBarMonster();
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

function updateSizeBarPlayer () {
    let a = playerHP - monsterDamage;
    playerBar.style.width = a + '%';
}

function updateSizeBarMonster () {
    let b = monsterHP - playerDamage;
    let c = monsterHP - playerSpeDamage;
    monsterBar.style.width = b + c + '%';
    console.log(monsterHP);
    console.log(b);
    console.log(c);
    console.log(playerDamage);
}

function playerAttack () {
    playerDamage = Math.floor(Math.random() * (10 - 3 +1)) + 3;
    monsterHP -= playerDamage;
}

function playerSpecialAttack () {
    playerSpeDamage = Math.floor(Math.random() * (20 - 10 +1)) + 10;
    monsterHP -= playerSpeDamage;
}

function monsterAttack () {
    monsterDamage = Math.floor(Math.random() * (10 - 5 +1)) + 5;
    playerHP -= monsterDamage;
}

function playerHeal () {
    playerHP += 10;
}

function addLiPlayer () {
    let liPLayer = document.createElement('li.player-action');
    liPLayer.appendChild(document.createTextNode('Player hit monster for ' + playerDamage ));
    list.appendChild(liPLayer);
}

function addLiMonster () {
    let liMonster = document.createElement('li.monster-action');
    liMonster.appendChild(document.createTextNode('\n' + 'Monster hit player for ' + monsterDamage ));
    list.appendChild(liMonster);
}

function addLiPlayerSpecial () {
    let liPLayerSpecial = document.createElement('li.player-action');
    liPLayerSpecial.appendChild(document.createTextNode('Player hit hard monster for ' + playerSpeDamage ));
    list.appendChild(liPLayerSpecial);
}

function addLiPlayerHeal () {
    let liPLayerHeal = document.createElement('li.player-action-heal');
    liPLayerHeal.appendChild(document.createTextNode('Player heals for ' + '10'));
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
    playerBar.style.width = '100%';
    monsterBar.style.width = '100%';
}

function checkWinner () {
    if (playerHP <= 0) {
        confirm('Vous avez perdu');
    } else if (monsterHP <= 0) {
        confirm('Vous avez gagné');
    }
}
