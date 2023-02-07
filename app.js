const nav = document.querySelector('nav');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    nav.style.display = 'flex';
    nav.style.top = '0';
})

closeMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    nav.style.top = '-100%';
})