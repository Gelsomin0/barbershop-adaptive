const ell = {
    sliderImage: document.querySelector('.hero-slider-img'),
    sliderNavigation: document.querySelector('.slider-navigation').children,
    leftButton: document.querySelector('.switch-slider-left-button'),
    rightButton: document.querySelector('.switch-slider-right-button'),
}

let sliderIndex = 0;
const sliderSpeed = 3000;

setInterval(() => {
    sliderIndex += 1;
    if (sliderIndex > 2) sliderIndex = 0;
    showSlider(sliderIndex);
}, sliderSpeed);


const showSlider = (index) => {
    if (index === 0) {
        ell.sliderImage.src = './img/hero_slider_01.jpg';
        ell.sliderNavigation[index].classList.add('js-slider-navigation-item');
        ell.sliderNavigation[2].classList.remove('js-slider-navigation-item');
        ell.sliderNavigation[1].classList.remove('js-slider-navigation-item');
    }

    if (index === 1) {
        ell.sliderImage.src = './img/hero_slider_02.jpg';
        ell.sliderNavigation[index].classList.add('js-slider-navigation-item');
        ell.sliderNavigation[index -1].classList.remove('js-slider-navigation-item');
        ell.sliderNavigation[index +1].classList.remove('js-slider-navigation-item');
    }

    if (index === 2) {
        ell.sliderImage.src = './img/hero_slider_03.jpg';
        ell.sliderNavigation[index].classList.add('js-slider-navigation-item');
        ell.sliderNavigation[index -1].classList.remove('js-slider-navigation-item');
        ell.sliderNavigation[0].classList.remove('js-slider-navigation-item');
    }
}

ell.leftButton.addEventListener('click', ({ target }) => switchSliderWithButton(target));
ell.rightButton.addEventListener('click', ({ target }) => switchSliderWithButton(target));

const switchSliderWithButton = (button) => {
    if (button.classList.contains('switch-slider-left-button')) {
        sliderIndex -= 1;
        if (sliderIndex < 0) sliderIndex = 2;
        showSlider(sliderIndex);
    }

    if (button.classList.contains('switch-slider-right-button')) {
        sliderIndex += 1;
        if (sliderIndex > 2) sliderIndex = 0;
        showSlider(sliderIndex);
    }
}

showSlider(sliderIndex);