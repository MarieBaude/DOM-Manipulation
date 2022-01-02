/* VARIABLES 
-----------------------------
*/
const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const sizeMove = 70;
const maxLeft = (slidesCount - 1) * sizeMove * -1;
let move = 0;

/* 
-----------------------------
*/
document.querySelector(".next-button").addEventListener("click", function() {
    changeSlide();
});

document.querySelector(".previous-button").addEventListener("click", function() {
    changeSlide(false);
});

/* FUNCTIONS 
-----------------------------
*/
function changeSlide (next = true) {
  if (next) {
      move += move > maxLeft ? -sizeMove : move * -1;
    } else {
      move = move < 0 ? move + sizeMove : maxLeft;
    }
    slides.style.left = move + "em";
}