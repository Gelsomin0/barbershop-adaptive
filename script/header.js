window.addEventListener('scroll', () => {
    const content = document.querySelector('.header');
    const contentPosition = window.scrollY;
    
    if (contentPosition > 100) content.classList.add('js-header-scrolled');
    else content.classList.remove('js-header-scrolled');
});