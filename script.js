const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }

    updateCarouse();
});

right.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }

    updateCarouse();
});

function updateCarouse() {
    carousel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth
    }px)`;

    document.body.style.background = `#${slides[current_slide].getAttribute(
        "data-bg"
    )}`;
}