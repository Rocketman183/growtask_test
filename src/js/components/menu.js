$('.toggle').on('click', function () {
	$('.header__menu-items').slideToggle();

	$('toggle').fadeIn(3000, function () {
		$('.toggle').removeClass('fa-times');
		$('#menu-icon').addClass('fa-bars').fadeOut(3000);
	});
})

console.log('yep');