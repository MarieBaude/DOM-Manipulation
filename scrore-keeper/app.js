let player1Button = document.querySelector(".button-player1");
let player2Button = document.querySelector(".button-player2");
let resetButton = document.querySelector(".button-reset");

let player1Score = document.querySelector(".num-player1");
let player2Score = document.querySelector(".num-player2");

let numInput = document.querySelector(".input-num");

let winnerNum = document.querySelector(".num-winner");

let score1 = 0;

// contenu input afficher dans la span 'num-winner'
numInput.addEventListener("change", function(){
    winnerNum.textContent=this.value;        
    }
);

function change () {
    winnerNum.style.color = "green";
}
    
document.querySelector(".button-player1").addEventListener("click", function() {
    change();
});