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

	$('.slick-small').slick({
		slidesToShow: 3,
		arrows: true,
		dots: true
	})

	// $('a[data-toggle="pill"]').on('click', function (e) {
	// 	console.log(1);
	// 	$('.slick-middle, .slick-small').slick('refresh');
	// });

});
