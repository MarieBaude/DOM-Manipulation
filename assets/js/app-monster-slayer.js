/* VARIABLES 
-----------------------------
*/
const buttonStart = document.querySelector('.new-start-monster');
const buttonAttack = document.querySelector('.attack');
const buttonSpecialAttack = document.querySelector('.special-attack');
const buttonHeal = document.querySelector('.heal');
const buttonGiveUP = document.querySelector('.give-up');
const sectionText = document.querySelector('.text');

class player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.damage = 3;
    }

    attack(damage) {
        this.damage = damage;
    }
}


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
}

function playerAttack () {
    let dmg = -1
    this.hp = dmg;
    console.log(this.hp);
}