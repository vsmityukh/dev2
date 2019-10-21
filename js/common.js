$(function() {
	
	$('.main_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false, 
		dots: true,
	});

	$('.slick-middle').slick({
		slidesToShow: 2,
		arrows: true,
		dots: true
	})

});
