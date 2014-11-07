$(document).ready(function() {
	$('section').css('height', $(window).height());
	$(window).resize(function() {
		$('section').css('height', $(window).height());
	});

	$('.menu a[href^="#"]').click(function(){  
	    var the_id = $(this).attr("href");  
		$('#api').addClass('active');
		$('.menu li').removeClass('active');
		$(this).find('li').addClass('active');
	    $('html, body').animate({  
	        scrollTop:$(the_id).offset().top  
	    }, 400);  
	    return false;  
	});

	$('.route').bind('mousedown', function() {
		var target = $(this).attr('rel');
		if ($('#'+target).hasClass('active')) {
			$('#'+target).removeClass('active');
		} else {
			$('.apiContainer .content').removeClass('active');
			$('#'+target).addClass('active');
		}
	});

	$(window).on('scroll', function() {
		$('#api').addClass('active');
		$('.menu li').removeClass('active');

		if ($(this).scrollTop() > 400) {
			$('.menu [href="#api"] li').addClass('active');
		} else {
			$('.menu [href="#home"] li').addClass('active');
			$('.apiContainer .content').removeClass('active');
			$('.apiContainer #about').addClass('active');
		}
	});
});
