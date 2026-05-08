
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






