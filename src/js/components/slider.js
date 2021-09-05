const swiper = new Swiper('.swiper', {
	speed: 400,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		768: {
			slidesPerView: 1.5,
			spaceBetween: 150,
			centeredSlides: true,
		}
	}
});