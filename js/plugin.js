$(function () {
    
    // Start Header
    $('.header').innerHeight($(window).innerHeight());
    $(window).on('scroll', function () {
        if ($('html').scrollTop() == 0) {
            $('.navbar').removeClass('navbar-moving')
        } else {
            $('.navbar').addClass('navbar-moving')
        }
    });
    $(window).on('load', function () {
        if ($('.navbar').offset().top != 0) {
            $('.navbar').addClass('navbar-moving')
        }
    });
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    // End Header

    // Start Easily
    $('.easily .img').innerHeight($('.easily .video-text').innerHeight());
    // End Easily

    // Start Go Up
    $(window).on('scroll', function () {
        if ($('html, body').scrollTop() >= 1000) {
            $('.up').fadeIn(500)
        } else {
            $('.up').fadeOut(500)
        }
    });
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    // End Go Up
    // Start Count To
    var count = 0;
    $(window).on('scroll', function () {
        
        if ($('html, body').scrollTop() >= $('section.clients').offset().top) {
            if(count == 0) {
                $('.number1').countTo({
                    to: 2425,
                    speed: 2000,
                    comma: true
                });
                $('.number2').countTo({
                    to: 1143,
                    speed: 2000
                });
                count = 1
            }
        }
        
        
    });
    // End Count To
});

// Start Spinner Loading
$(window).on('load', function () {
    'use strict';
    $('body').css('overflow', 'auto');
	$('.loading-overlay .spinner').fadeOut(2000, function () {
		$(this).parent().fadeOut(2000, function () {
			$(this).remove();
		});
	});
        
});
// End Spinner Loading