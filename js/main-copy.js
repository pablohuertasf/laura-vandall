$(document).ready(function () {
	
    $(".video-link").hover(function () {
        $(this).children("video")[0].play();
        
    }, function () {
        var el = $(this).children("video")[0];
        el.pause();
    });

    'use strict';
    
    
    	

	
	//Lazy load
	
	/*
	function isVisible( row, container, offset ){
	    var elementTop = $(row).offset().top + offset,
	        elementHeight = $(row).height(),
	        containerTop = container.scrollTop(),
	        containerHeight = container.height()*3;
	    return ((((elementTop - containerTop) + elementHeight) > 0) && ((elementTop - containerTop) < containerHeight));
	}
	
	*/
	
	/*
	function lazyLoadBgImages(){
		$('img').each(function(){
			var t = $(this);
			
			if(isVisible(t, $(window), 800)){
				
				if(!t.hasClass('loaded')){
					
					if(t.attr('data-src') != '' && typeof(t.attr('data-src')) != 'undefined'){
						t.attr("src", t.attr('data-src'));
					}
					setTimeout(function(){
						t.addClass('loaded');
					}, 1200);

				}
			}
			
		});
	}
	
	lazyLoadBgImages();
			
			
	$(window).scroll(function() {
		
		lazyLoadBgImages();
	
	});
*/

    

	var $status = $('.project-counter p');
	var $slickElement = $('.slider');
	
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status.text(i + '/' + slick.slideCount);
	});

	 $('.slider').slick({
		prevArrow : '<div class="slick-prev"></div>',
		nextArrow : '<div class="slick-next"></div>',
		fade : true,
		  slidesToShow: 1,
	 });
	 
	 $('#button').click(function(e) {
		 e.preventDefault();
		 if($(this).hasClass('active')) {
			 $(this).removeClass('active');
			 $('#button-mobile').removeClass('active');
			 $('#overlay').slideUp(); 
		 } else {
			 $(this).addClass('active');
			 $('#button-mobile').addClass('active');
			 $('#overlay').slideDown();
		 }
	 });

	 $('#button-mobile').click(function(e) {
		 e.preventDefault();
		 if($(this).hasClass('active')) {
			 $(this).removeClass('active');
			 $('#button').removeClass('active');
			 $('#overlay').slideUp(); 
		 } else {
			 $(this).addClass('active');
			 $('#button').addClass('active');
			 $('#overlay').slideDown();
		 }
	 });

	 $('#button-project').click(function(e) {
		 e.preventDefault();
		 if($(this).hasClass('active')) {
			 $(this).removeClass('active');
			 $('#overlay-project').slideUp(); 
		 } else {
			 $(this).addClass('active');
			 $('#overlay-project').slideDown();
		 }
	 });
	 
	 $('#button-esp').click(function(e) {
		 e.preventDefault();
		 $(this).addClass('none');
		 $('#info-eng').addClass('none');
		 $('#button-eng').addClass('display');
		 $('#info-esp').addClass('display');
		 $('.overlay-logos').addClass('overlay-logos-esp');
	 });

	 $('#button-eng').click(function(e) {
		 e.preventDefault();
		 $('#button-esp').removeClass('none');
		 $('#info-eng').removeClass('none');
		 $('#button-eng').removeClass('display');
		 $('#info-esp').removeClass('display');
		 $('.overlay-logos').removeClass('overlay-logos-esp');
	 });

	 $('#button-esp-mobile').click(function(e) {
		 e.preventDefault();
		 $(this).addClass('none');
		 $('#info-eng').addClass('none');
		 $('#button-eng-mobile').addClass('display');
		 $('#info-esp').addClass('display');
	 });

	 $('#button-eng-mobile').click(function(e) {
		 e.preventDefault();
		 $('#button-esp-mobile').removeClass('none');
		 $('#info-eng').removeClass('none');
		 $('#button-eng-mobile').removeClass('display');
		 $('#info-esp').removeClass('display');
	 });
	 
	 // Landing
	 var timer = setInterval( showDiv, 2000);
	 var counter = 0;
	 var total = $('.bubble').length + 6;	
	
	 
	 function showDiv() {
		 if(counter == 0 ) { counter ++; return; }
		 $('#whatsapp').find('#bubble-' + counter).show('fast');
		 counter ++;

		 $('#landing').animate({
			 scrollTop: 2000000
			
		 })
		 
		 if (total == counter ) {
			 $('#landing').fadeOut();
			 $('body').removeClass('landing-loaded');
			 clearInterval(showDiv);

			 Cookies.set(cookie_policy, 'allow', 365);

		 }
		 
	 }
	 
	 showDiv();
	 
	 
	 if(document.referrer.indexOf(document.protocol + "//" + location.host) === 0){$('body').addClass('NotshowCookie');}
	
	/* Cookies */
	
	var cookie_policy = 'vandall_cookie';
	
	if(Cookies.get(cookie_policy) == 'allow'){
		$('body').addClass('NotshowCookie');
		Cookies.set(cookie_policy, 'allow', 365);
	}else{
		$('body').removeClass('NotshowCookie');
	}

	 
});