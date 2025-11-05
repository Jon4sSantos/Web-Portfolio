const botaoMenu = document.getElementById('botaomenu');
const botaoMenuFechar = document.getElementById('botaomenuClose');
const MenuMobile = document.getElementById('menuMobile');

botaoMenu.addEventListener('click', ()=> {
    MenuMobile.classList.toggle('show');
});

botaoMenuFechar.addEventListener('click', ()=> {
    MenuMobile.classList.toggle('show');
});