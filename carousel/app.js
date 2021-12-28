const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 80 * -1;
const sizeMove = -80;
let move = 0;

export function changeSlide (next = true) {
    if (next) {
        move += move > maxLeft ? -80 : move * -1;
      } else {
        move = move < 0 ? move + 80 : maxLeft;
      }
      slides.style.left = move + "em";
}

document.querySelector(".next-button").addEventListener("click", function() {
    changeSlide();
});

document.querySelector(".previous-button").addEventListener("click", function() {
    changeSlide(false);
});
