const body = document.querySelector('body');
const el = document.querySelector('.js-btn-hamburger');

el.onclick = function() {
    body.classList.toggle('menu-is-open');
}