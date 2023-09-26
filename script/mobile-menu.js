const menuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenuBackdrop = document.querySelector('[data-mobile-menu-backdrop]');
const mobileMenuWrapper = document.querySelector('[data-mobile-menu-wrapper]');
const closeMenuData = document.querySelectorAll('[data-close-mob-menu]');

const toggleMobileMenu = () => {
    mobileMenuBackdrop.classList.toggle('js-mobile-backdrop-is-open');
    mobileMenuWrapper.classList.toggle('js-mobile-menu-wrapper-is-open');
}

menuBtn.addEventListener('click', toggleMobileMenu);

closeMenuData.forEach((item) => item.addEventListener('click', toggleMobileMenu));