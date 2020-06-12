window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__list-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('header__list-active');
        })
    })
})