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
let score = 0;

/* 
-----------------------------
*/

numInput.addEventListener("change", function() {
    addScore();
});

player1Button.addEventListener("click", function() {
    addClickPlayer1();
});

player2Button.addEventListener("click", function() {
    addClickPlayer2();
});

resetButton.addEventListener("click", function() {
    reset();
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

function addScore () {
    score++;
    winnerNum.textContent = score;
}

function reset () {
    clicksPlayer1 = 0;
    clicksPlayer2 = 0;
    score = 0;
    player1Score.innerHTML = clicksPlayer1;
    player2Score.innerHTML = clicksPlayer2;
    winnerNum.innerHTML = score;
    document.querySelector(".input-num").value = "0";
}
