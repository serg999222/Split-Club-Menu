window.addEventListener('load', function () {
	// Визначте відстань для прокрутки
	var scrollDistance = window.innerHeight; // може бути потрібно дещо корегувати

	// Прокрутіть сторінку на визначену відстань
	window.scroll(0, -scrollDistance);
});
