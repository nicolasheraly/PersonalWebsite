$(document).ready(function() {
	$('section').css('height', $(window).height());
	$(window).resize(function() {
		$('section').css('height', $(window).height());
	});

	$('.fa-chevron-down').bind('mousedown', function() {

	});

	$('.menu li i').bind('mousedown', function() {
		$('.menu li i').removeClass('active');
		$(this).addClass('active');
	});


	$('.menu a[href^="#"]').click(function(){  
	    var the_id = $(this).attr("href");  
	  
	    $('html, body').animate({  
	        scrollTop:$(the_id).offset().top  
	    }, 400);  
	    return false;  
	}); 
	
	// lock scroll
	var scrollPosition = [
	self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
	self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1])  
});