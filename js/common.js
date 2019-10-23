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
