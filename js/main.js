var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("header nav");
// let menuFloat = document.querySelector("header nav a");
var burgerShow = false;
var menuShow = true;
var body = document.querySelector("body");
burger.onclick = function () {

	if (menu.style.display == "none" || menu.style.display == "") {
		// if (!menuShow) {

		// menuShow = true;
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
	else {
		// menuShow = false;
		menu.style.display = "none";
		menu.style.margin = "0px";
	}
}

window.onresize = function (event) {
	// if (menu.style.display == "none" || menu.style.display == "") { menuShow = false; }
	// else { menuShow = true; }

	if (body.offsetWidth <= 650) {
		burgerShow = true;
		menu.style.margin = "50px";
	} else {
		burgerShow = false;
		menu.style.margin = "0px";
	}

	if (body.offsetWidth > 650 && (!burgerShow)) { menu.style.display = "block"; }
	else { menu.style.display = "none"; }
}


/*
1. Сверстать слайдер - done
2. Сделать переключание фотографий влево в право
3. Сделать переключение фотограффий по клику на нижнее фото
4. При клике на большую картинку улечить картинку
*/

var images = [
	"WallpapersMania №114 (1).jpg",
	"WallpapersMania №114 (2).jpg",
	"WallpapersMania №114 (3).jpg",
	"WallpapersMania №114 (4).jpg",
	"WallpapersMania №114 (5).jpg",
	"WallpapersMania №114 (6).jpg",
	"WallpapersMania №114 (7).jpg",
	"WallpapersMania №114 (8).jpg",
	"WallpapersMania №114 (9).jpg",
	"WallpapersMania №114 (10).jpg"
];
// Путь к картинке слайдера
var path = "img/slider/";

var currentImage = 0;

// первая картинка
$("#main-slider img")
	.attr("src", path + images[currentImage]);

// Клик по ПРАВОЙ стрелке
$("#main-slider .next").click(function () {

	if (currentImage < images.length - 1) {
		currentImage++;
	} else {
		currentImage = 0;
	}

	$("#main-slider img")
		.attr("src", path + images[currentImage]);

	// находим li по data-id
	var $item = $('#slides ul').children('[data-id="' + currentImage + '"]');
	// Убираем у всех эдементов класс 'active'
	$("#slides ul li").removeClass('active');
	// на єлементе который выбрали по data-id добавляем класс active
	$item.addClass('active');
	console.dir($item);

});
// Клик по ЛЕВОЙ стрелке
$("#main-slider .pref").click(function () {

	if (currentImage > 0) {
		currentImage--;
	} else {
		currentImage = images.length - 1;
	}

	$("#main-slider img")
		.attr("src", path + images[currentImage]);

	// находим li по data-id
	var $item = $('#slides ul').children('[data-id="' + currentImage + '"]');
	// Убираем у всех эдементов класс 'active'
	$("#slides ul li").removeClass('active');
	// на єлементе который выбрали по data-id добавляем класс active
	$item.addClass('active');
});
// Создане катрочек фотографий
for (var i = 0; i < images.length; i++) {
	// Добавляем элемаент в блок с миникартинками
	$('#slides ul').append("<li data-id='" + i + "'><img src='"
		+ path + images[i] + "'></li>");
	// Если этопервая капртинка добавляем класс 'active'
	if (i == 0) {
		$('#slides ul li').addClass('active');
	}
}

// Делаем Клик по слайдам
$('#slides ul li').click(function (e) {
	// Убираем у всех эдементов класс 'active'
	$("#slides ul li").removeClass('active');
	// на єлементе по которому кликнули добавляем класс active
	$(this).addClass('active');
	// получаем id  элемента по которому кликнули
	// var id = e.currentTarget.dataset.id;
	currentImage = e.currentTarget.dataset.id;
	// меняем картинку в слайде
	$("#main-slider img")
		// .attr("src", path + images[id]);
		.attr("src", path + images[currentImage]);
});

$("#main-slider img").click(function () {
	// console.log(this);
	$('#opacity').css({ 'display': 'block' });
	$('#full-image')
		.css({ 'display': 'block' })
		.append('<img src="' + $(this).attr('src') + '">');
});

$('#opacity').click(function () {
	$('#opacity').css({ 'display': 'none' });
	$('#full-image').css({ 'display': 'none' }).empty();
});