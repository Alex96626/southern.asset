addEventListener('DOMContentLoaded', () => {

// burger menu     
const burgerBtn = document.querySelector('.header__burger-menu')
const burgerMenu = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active')
    burgerBtn.classList.toggle('header__burger-menu--active')
})

})