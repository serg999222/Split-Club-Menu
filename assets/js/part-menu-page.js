const decorSqares = document.querySelectorAll('.sub_menu_list_item_description_sqare');
const indicator = document.querySelector('.indikator_menu');
const indikatorBorders = document.querySelectorAll('.sub_menu_list_item_decorBorder');
const buttonLinksMenu = document.querySelectorAll('.bottom_menu_item_link');
const baner = document.querySelector('.li_wrapper_3_banner');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});


// Smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Change button color on scroll
window.addEventListener('scroll', function () {
	var scrollPosition = window.scrollY;

	document.querySelectorAll('.submenu_navigate_item').forEach(item => {
		var targetId = item.querySelector('a').getAttribute('href').substring(1);
		var targetElement = document.getElementById(targetId);

		if (targetElement.offsetTop <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition) {
			// The element is in the viewport
			document.querySelector('.submenu_navigate_item_button.active')?.classList.remove('active');
			item.querySelector('.submenu_navigate_item_button').classList.add('active');
		} else {
			// The element is not in the viewport
			item.querySelector('.submenu_navigate_item_button').classList.remove('active');
		}
	});
});

window.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 100) {
		document.querySelector('.scroll_up_button').style.visibility = 'visible';
		document.querySelector('.scroll_up_button').style.opacity = '1';

	}
	if (scrollPosition < 100) {
		document.querySelector('.scroll_up_button').style.visibility = 'hidden';
		document.querySelector('.scroll_up_button').style.opacity = '0';
	}

})

document.querySelector('.scroll_up_button').addEventListener('click', () => {
	window.scrollTo(0, 0);
})

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
	const colorFood = '#B70501';
	const colorBar = '#00512A';
	const colorWine = '#C2B55F';
	const colorSigar = '#84899E';
	if (titleContent !== null) {
		if (titleContent === 'Меню Ресторан') {
			indicator.style.backgroundColor = colorFood;
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = colorFood;
			}))

			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Меню Ресторан') {
					item.style.backgroundColor = colorFood;
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = colorFood;
			})
			document.querySelectorAll('.list_section_title_wrap').forEach(item => {
				item.style.backgroundColor = colorFood;
			})
		}

		if (titleContent === 'Барна Карта') {
			indicator.style.backgroundColor = colorBar;
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = colorBar;
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Барна Карта') {
					item.style.backgroundColor = colorBar;
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = colorBar;
			})
			document.querySelectorAll('.list_section_title_wrap').forEach(item => {
				item.style.backgroundColor = colorBar;
			})
		}

		if (titleContent === 'Винна Карта') {
			indicator.style.backgroundColor = colorWine;
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = colorWine;
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Винна Карта') {
					item.style.backgroundColor = colorWine;
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = colorWine;
			})
			document.querySelectorAll('.list_section_title_wrap').forEach(item => {
				item.style.backgroundColor = colorWine;
			})
		}

		if (titleContent === 'Сигарна Карта') {
			indicator.style.backgroundColor = colorSigar;
			indikatorBorders.forEach((item => {
				item.style.backgroundColor = colorSigar;
			}))
			buttonLinksMenu.forEach((item, i) => {
				if (item.textContent === 'Сигарна Карта') {
					item.style.backgroundColor = colorSigar;
				} else {
					item.style.backgroundColor = '#370D43';
				}
			})
			decorSqares.forEach(item => {
				item.style.backgroundColor = colorSigar;
			})
			document.querySelectorAll('.list_section_title_wrap').forEach(item => {
				item.style.backgroundColor = colorSigar;
			})
		}
	}
}
