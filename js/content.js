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
	  
});