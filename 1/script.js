const burgerButton = document.querySelector('.menu-burger-button');
const menuBurger = document.querySelector('.menu-burger');

burgerButton.addEventListener('click', function(e){
    burgerButton.classList.toggle('active');
    menuBurger.classList.toggle('active');
});
