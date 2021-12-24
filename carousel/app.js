const slides = document.querySelector(".slides");

function changeSlide () {
    slides.style.left = '-110vw';
}

document.querySelector(".next-button").addEventListener("click", function() {
    changeSlide();
});


//tant que compteurImage 

