const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
let sizeMove = -80;
let move = 0;

function changeSlide () {
    move = move + sizeMove
    console.log(move);
    slides.style.left = sizeMove + "em";
}

document.querySelector(".next-button").addEventListener("click", function() {
    changeSlide();
});



