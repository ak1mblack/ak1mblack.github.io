$(document).ready(function () {
    $('.humburger').click(function (e) { 
        e.preventDefault();
        $('.header__menu').toggleClass('menu_active');
        $('.humburger').toggleClass('hamburger_active');
    });
}); 

















