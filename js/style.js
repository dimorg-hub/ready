$(window).on("scroll", function () {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 220, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom',
		// defines which position of the element regarding to window should trigger the animation

	});
});

$(".logo__link, .menu__link, .footer__top-link, .footer__item-link, .notice__link").on("click", function (ten) {
	ten.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	top -= 0;
	$('body,html').animate({ scrollTop: top }, 1300);
});




$(document).ready(function () {
	$('.header__burger--inner, .opasity__link, .opasity__sub-link').click(function () {
		$('.header__burger, .opasity').toggleClass('active');
	});
	$('.audio__btn').click(function () {
		$('.audio__btn').toggleClass('active');
	});

	$('.menu__btn, .intro__btn, .recording__cross, .price__btn, .price__btn-buy').click(function () {
		$('.recording').toggleClass('active');
	});
});

$(function () {
	let track = new Audio();
	track.src = "video/eminem.mp3";
	let music = document.querySelector(".audio__btn");

	music.addEventListener("click", function () {
		if (track.paused) track.play();
		else track.pause();
	});
});

$('document').ready(function () {
	$('.header').animate({
		top: 0,
	}, 500, "linear"
	);
	$('.header__logo').animate({
		left: 0,
	}, 400, "linear"
	);
	$('.menu__btn').animate({
		right: 0,
	}, 600, "linear"
	);
	$('.intro__title').animate({
		top: 0,
		opacity: 1
	}, 600, "linear"
	);
	$('.intro__text').animate({
		top: 0,
		opacity: 1
	}, 700, "linear"
	);
	$('.intro-btn-animate').animate({
		top: 0,
		opacity: 1
	}, 1000, "linear"
	);
	$('.audio__btn').animate({
		right: 100,
	}, 1200, "linear"
	);


	$('.price__nav-btn1').on('click', function () {
		$('.price__content-trial, .price__content-unlimited, .price__content-morning, .price__content-network, .price__content-one, .price__content-slimming, .price__content-personal').removeClass('active');
		$('.price__content-online').addClass('active');
	});

	$('.price__nav-btn2').on('click', function () {
		$('.price__content-online, .price__content-unlimited, .price__content-morning, .price__content-network, .price__content-one, .price__content-slimming, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-trial').addClass('active');
	});

	$('.price__nav-btn3').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-morning, .price__content-network, .price__content-one, .price__content-slimming, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-unlimited').addClass('active');
	});


	$('.price__nav-btn4').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-unlimited, .price__content-network, .price__content-one, .price__content-slimming, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-morning').addClass('active');
	});


	$('.price__nav-btn5').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-unlimited, .price__content-morning, .price__content-one, .price__content-slimming, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-network').addClass('active');
	});


	$('.price__nav-btn6').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-unlimited, .price__content-morning, .price__content-network, .price__content-slimming, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-one').addClass('active');
	});


	$('.price__nav-btn7').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-unlimited, .price__content-morning, .price__content-network, .price__content-one, .price__content-personal, .price__nav-btn').removeClass('active');
		$('.price__content-slimming').addClass('active');
	});


	$('.price__nav-btn8').on('click', function () {
		$('.price__content-online, .price__content-trial, .price__content-unlimited, .price__content-morning, .price__content-network, .price__content-one, .price__content-slimming, .price__nav-btn').removeClass('active');
		$('.price__content-personal').addClass('active');
	});

});

// ----------------------------------------------Слайдер


$('.hot-offers__inner').slick({
	centerMode: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});


$('.reviews__inner').slick({
	centerMode: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});







