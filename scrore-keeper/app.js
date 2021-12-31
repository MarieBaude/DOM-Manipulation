let numPlayer1 = document.querySelector("#num-player1");
let numPlayer2 = document.querySelector("#num-player2");
let buttonPlayer1 = document.querySelector("#button-player1");
let buttonPlayer2 = document.querySelector("#button-player2");
let buttonReset = document.querySelector("#button-reset");

let score1 = 0;
let score2 = 0;

console.log(numPlayer1);

score1 =+ 1;
console.log(score1);


let replacedNode = numPlayer1.replaceChild(score1, numPlayer1);
console.log(replacedNode);

// document.querySelector("#button-player1").addEventListener("click", function() {
//     ();
// });