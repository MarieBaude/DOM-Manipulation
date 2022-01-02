/* VARIABLES 
-----------------------------
*/
let player1Score = document.querySelector(".num-player1");
let player2Score = document.querySelector(".num-player2");

let winnerNum = document.querySelector(".num-winner");
let numInput = document.querySelector(".input-num");

let player1Button = document.querySelector(".button-player1");
let player2Button = document.querySelector(".button-player2");
let resetButton = document.querySelector(".button-reset");

let clicksPlayer1 = 0;
let clicksPlayer2 = 0;

/* 
-----------------------------
*/

numInput.addEventListener("change", function() {
    winnerNum.textContent=this.value;
    console.log(winnerNum);        
});

player1Button.addEventListener("click", function() {
    addClickPlayer1();
});

player2Button.addEventListener("click", function() {
    addClickPlayer2();
});

/* FUNCTIONS 
-----------------------------
*/
function addClickPlayer1 () {
    clicksPlayer1++;
    player1Score.innerHTML = clicksPlayer1;
}

function addClickPlayer2 () {
    clicksPlayer2++;
    player2Score.innerHTML = clicksPlayer2;
}
