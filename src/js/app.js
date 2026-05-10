
import { homeModal } from "./modals/home-modal.js";
import { tabs } from "./particals/tabs.js";
import { sliders } from "./particals/sliders.js";
import { timer } from "./particals/timer.js";

document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.hero-home')){
        homeModal();
    } else if(document.querySelector('.page')) {
        tabs();
    } else {
        return;
    }
});
if(document.querySelector('.swiper-wrapper')){
    sliders();
}

// ==== menu mobile =======
const menuMobile = document.querySelector('.header-mobile');
const openMenu = document.querySelector('.header__mobile-btn');
const closeMenu = document.querySelector('.menu-close');

if(openMenu && menuMobile && closeMenu){
    openMenu.addEventListener('click', (e) => {
        menuMobile.classList.add('open');
    });
    closeMenu.addEventListener('click', (e) => {
        menuMobile.classList.remove('open');
    });
}


const input = document.querySelector('#file');
const fileName = document.querySelector('.file-name');
if(input){
    input.addEventListener('change', () => {
        fileName.textContent = input.files[0]?.name || 'Файл не выбран';
    });
}

// аккордеон
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
    const button = item.querySelector('.faq__head');
    const body = item.querySelector('.faq__body');
    button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(el => {
            el.classList.remove('active');
            const content = el.querySelector('.faq__body');
            content.style.height = '0px';
        });
        if (!isActive) {
            item.classList.add('active');
            body.style.height = body.scrollHeight + 'px';
        }
    });
});





