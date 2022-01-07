/* VARIABLES 
-----------------------------
*/
const buttonStart = document.querySelector('.new-start-monster');
const buttonAttack = document.querySelector('.attack');
const buttonSpecialAttack = document.querySelector('.special-attack');
const buttonHeal = document.querySelector('.heal');
const buttonGiveUP = document.querySelector('.give-up');


/* EVENTS
-----------------------------
*/
buttonStart.addEventListener('click', function() {
    appearButton();
});


/* FUNCTIONS 
-----------------------------
*/

function appearButton () {
    buttonStart.style.display = 'none';
    buttonAttack.style.display = 'inher';
    buttonSpecialAttack.style.display = 'inher';
    buttonHeal.style.display = 'inher';
    buttonGiveUP.style.display = 'inher';
}