const decorSqares = document.querySelectorAll('.sub_menu_list_item_description_sqare');
const indicator = document.querySelector('.indikator_menu');
const indikatorBorders = document.querySelectorAll('.sub_menu_list_item_decorBorder');
const buttonLinksMenu = document.querySelectorAll('.bottom_menu_item_link');

const baner = document.querySelector('.li_wrapper_3_banner');

function toggleDisplay() {
	if (baner.style.display === 'block') {
		baner.style.display = 'none';
	} else {
		baner.style.display = 'block';
	}
}

setInterval(toggleDisplay, 3000);


document.querySelectorAll('.submenu_navigate_item_button').forEach((item, i) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		addclass(i)
	});
})

function addclass(i) {
	document.querySelectorAll('.submenu_navigate_item_button').forEach((item, index) => {
		if (i === index) {
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	})
}

document.addEventListener('DOMContentLoaded', showMenuPart)
document.addEventListener('DOMContentLoaded', () => addclass(1))
buttonLinksMenu.forEach((item, i) => {
	item.addEventListener('click', () => {
		document.title = item.textContent;
		showMenuPart();
	});
})


function showMenuPart() {
	const titleContent = document.title ? document.title : null;
	if (titleContent !== null) {
		if (titleContent === 'Меню Ресторан') {
			indicator.style.backgroundColor = '#B70501';
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = '#B70501';
			}))
			//indikatorBorder.style.backgroundColor = '#B70501';
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Меню Ресторан') {
					item.style.backgroundColor = '#B70501';
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = 'red';
			})
		}

		if (titleContent === 'Барна Карта') {
			indicator.style.backgroundColor = '#00512A';
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = '#00512A';
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Барна Карта') {
					item.style.backgroundColor = '#00512A';
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = '#00512A';
			})
		}

		if (titleContent === 'Винна Карта') {
			indicator.style.backgroundColor = '#C2B55F';
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = '#C2B55F';
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Винна Карта') {
					item.style.backgroundColor = '#C2B55F';
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = '#C2B55F';
			})
		}

		if (titleContent === 'Сигарна Карта') {
			indicator.style.backgroundColor = '#84899E';
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = '#84899E';
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Сигарна Карта') {
					item.style.backgroundColor = '#84899E';
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = '#84899E';
			})
		}
	}
}
