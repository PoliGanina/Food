import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import menuCard from './modules/menuCard';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoader', () => {
    const modalTimerId = setTimeout(() => openModal('.modal',modalTimerId), 50000);
    
    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    menuCard();
    forms(modalTimerId);
    slider();
    calc();

});