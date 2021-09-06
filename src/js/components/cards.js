const swiperCards = new Swiper('.swiper-cards', {
	speed: 400,
	slidesPerView: 1.1,
	spaceBetween: -30,
	navigation: {
		nextEl: ".next-card",
		prevEl: ".prev-card"
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
			// centeredSlides: true,
			spaceBetween: 0,
		}
	}
});