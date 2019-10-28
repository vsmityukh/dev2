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
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			}
		]
	})

	$('.slick-small').slick({
		slidesToShow: 3,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			}
		]
	})

	$('.more_photo--slider').slick({
		dots: false,
		arrows: true,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		verticalSwiping: true,
	  });

	$(document).scroll(function(){
		var offset = $(document).scrollTop(),
			header = $('header').height();
		if( offset > header )
			$('#leftMenu').addClass('content')
		else
			$('#leftMenu').removeClass('content')
	})

	$('#menuToggler, #menuClose').on('click', function(){
		$('#leftMenu').toggleClass('active')
	})


});
