const sliderButtons = document.querySelectorAll('[data-carousel-button]');
let canSlideAuto = true;

const switchSliderWithClick = (button) => {
    canSlideAuto = false;
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = document.querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    const sliderNavigation = document.querySelector('.hero-slider-navigation');
    const activeNavSlide = sliderNavigation.querySelector('[data-nav-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    sliderNavigation.children[newIndex].dataset.navActive = true;
    delete activeSlide.dataset.active;
    delete activeNavSlide.dataset.navActive;
}

const switchSliderAuto = () => {
    const slides = document.querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    const sliderNavigation = document.querySelector('.hero-slider-navigation');
    const activeNavSlide = sliderNavigation.querySelector('[data-nav-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + 1;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    sliderNavigation.children[newIndex].dataset.navActive = true;
    delete activeSlide.dataset.active;
    delete activeNavSlide.dataset.navActive;;
}

sliderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switchSliderWithClick(button);
    }); 
});

setInterval(() => {
    if(canSlideAuto) switchSliderAuto();
}, 4000);