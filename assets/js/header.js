let menu = document.querySelector('.header_sitebar');
let burgerButton = document.querySelector('.burger_menu').addEventListener('click', () => {
	menu.classList.toggle('active');
});

document.querySelector('.sitebar_button').addEventListener('click', () => {
	menu.classList.remove('active')
})