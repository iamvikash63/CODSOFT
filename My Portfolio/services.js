

const prevBtn=document.querySelector('.prev-btn-sr');
const nextbtn=document.querySelector('.nextbtn');
const slider=document.querySelector('.Services-div');
const slides=document.querySelectorAll('.Services-div1');

let index = 0;
const slideWidth = slides[0].offsetWidth+20; // Width + margin

nextbtn.addEventListener('click', () => {
    if (index < slides.length) {
        index++;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
});