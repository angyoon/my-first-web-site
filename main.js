const toogle__Button = document.querySelector('.navbar__toogleButton');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toogle__Button.addEventListener('click',() =>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});