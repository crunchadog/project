import tabs from './modules/tabs' ;
import modal from './modules/modal' ;
import timer from './modules/timer' ;
import slider from './modules/slider' ;
import forms from './modules/forms' ;
import cards from './modules/cards' ;
import calculator from './modules/calculator' ;
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    timer('.timer', '2022-08-12');
    calculator();
    forms('form',modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});