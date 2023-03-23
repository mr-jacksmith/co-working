const constantlyClients = document.querySelector('.constantly-clients');
const elements = document.querySelectorAll('.constantly-clients .slider img');
const toLeft = document.querySelector('.constantly-clients .to-left');
const toRight = document.querySelector('.constantly-clients .to-right');
const slider = document.querySelector('.constantly-clients .slider');

let sliderId = 0;
let maxElems = elements.length;

toRight.addEventListener('click', () => {
    // console.log(slider.offsetWidth);
    if (sliderId < 4) {
        sliderId += 1;
        slider.scrollBy({
            top: 0,
            left: 316,
            behavior: 'smooth'
          })
    } 
    if (sliderId == 4) {
        constantlyClients.classList.add('right');
    }
    if (sliderId > 0) {
        constantlyClients.classList.remove('left');
    }
});

toLeft.addEventListener('click', () => {
    if (sliderId > 0) {
        sliderId -= 1;
        slider.scrollBy({
            top: 0,
            left: -316,
            behavior: 'smooth'
          })
    }
    if (sliderId < 1) {
        constantlyClients.classList.add('left');
    }
    if (sliderId < 4) {
        constantlyClients.classList.remove('right');
    }
});