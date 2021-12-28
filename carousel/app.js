const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const sizeMove = -80;
let move = 0;

function changeSlide () {
    move = move + sizeMove
    slides.style.left = move + "em";
}

document.querySelector(".next-button").addEventListener("click", function() {
    changeSlide();
});
