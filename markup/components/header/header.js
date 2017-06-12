
var btnOpen = document.querySelector('.nav__mob-text');
var btnClose = document.querySelector('.nav__close-wrap');

var menu = document.querySelector('.nav__inner-wrap');

btnOpen.addEventListener('click', function () {
    menu.classList.add('nav__inner-wrap--open');
    btnClose.classList.add('nav__close-wrap--show');
});

btnClose.addEventListener('click', function () {
    menu.classList.remove('nav__inner-wrap--open');
    btnClose.classList.remove('nav__close-wrap--show');
});

