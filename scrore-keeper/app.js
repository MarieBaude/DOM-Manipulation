let player1Score = document.querySelector(".num-player1");
let player2Score = document.querySelector(".num-player2");

let winnerNum = document.querySelector(".num-winner");
let numInput = document.querySelector(".input-num");

let player1Button = document.querySelector(".button-player1");
let player2Button = document.querySelector(".button-player2");
let resetButton = document.querySelector(".button-reset");

let clicksPlayer1 = 0;
let clicksPlayer2 = 0;

function addClickPlayer1 () {
    clicksPlayer1++;
    document.querySelector(".num-player1").innerHTML = clicksPlayer1;
}

function addClickPlayer2 () {
    clicksPlayer2++;
    document.querySelector(".num-player2").innerHTML = clicksPlayer2;
}

// contenu input afficher dans la span 'num-winner'
numInput.addEventListener("change", function(){
    winnerNum.textContent=this.value;        
    }
);

document.querySelector(".button-player1").addEventListener("click", function() {
    addClickPlayer1();
});

document.querySelector(".button-player2").addEventListener("click", function() {
    addClickPlayer2();
});