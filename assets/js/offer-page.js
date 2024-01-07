

let countElements = document.querySelectorAll('.offer_element_count_value');

document.querySelectorAll('.offer_element_count_plus').forEach((item, index) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		countElements.forEach((countElement, i) => {
			if (index === i) {
				let count = parseInt(countElement.textContent, 10);
				count++;
				countElement.textContent = count;
			}
		})
	});
})

document.querySelectorAll('.offer_element_count_minus').forEach((item, index) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		countElements.forEach((countElement, i) => {
			if (index === i) {
				let count = parseInt(countElement.textContent, 10);
				if (count > 1) {
					count--;
					countElement.textContent = count;
				}
			}
		})
	});
})
