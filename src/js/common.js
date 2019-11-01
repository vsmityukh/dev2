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


	$('.big_photo--slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.more_photo--slider',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});

	$('.more_photo--slider').slick({
		dots: false,
		arrows: true,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		verticalSwiping: true,
		asNavFor: '.big_photo--slider'
	  });

	$('.video_list').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: true,
					dots: false
				}
			}
		]
	  });

	$(document).scroll(function(){
		var offset = $(document).scrollTop(),
			header = $('.main_slider').height();
		if( offset > header ){
			$('#leftMenu').addClass('content')
			$('header').addClass('main_white')
		}
		else{
			$('#leftMenu').removeClass('content')
			$('header').removeClass('main_white')
		}
	})

	$('#toTop').on('click', function(){
		$('body,html').animate({scrollTop: 0}, 2000)
	})

	$('#menuToggler, #menuClose').on('click', function(){
		$('#leftMenu').toggleClass('active')
	})


	$('.toggle_more').on('click', function(e){
		e.preventDefault();
		$(this).hide().prev().toggleClass('open')
	})



	//tabs logic
	$('.tab_links a').on('click', function(e){
		e.preventDefault();

		var parent = $(this).closest('.tab_links'),
			targetWrapper = $(parent.data('target')),
			targetItem = $($(this).attr('href'));

		parent.find('.active').removeClass('active');
		$(this).addClass('active');

		targetWrapper.find('.active').removeClass('active');
		targetItem.addClass('active')

	})


	// Поведение верхнего хидера при бездействии
	$('body').mousemove(function(){
		var offset = $(document).scrollTop();
	
		$('header').removeClass('hide');
		if( offset > 500 ){
			setTimeout( function(){
				$('header').addClass('hide') 
			}, 8000)
		}
	})


	//Ссылка плавного скролла
	$('.a-scroll').on('click', function(e){
		e.preventDefault();

		var href = $(this).attr('href');
		var top = $(href).offset().top - 200;
		$('body,html').animate({scrollTop: top}, 1000)

	})


	$('.mobile_front').on('click', function(e){
		$('nav>ul').toggle();
	})

});
