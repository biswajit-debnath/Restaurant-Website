$(window).on("load", function() {

	$('body').delay(1000).show();

	console.log("ready");
	//nav bar toggler btn
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')

	})




	//navbar padd less and making fixed after 718px scrol 	led
	$(window).scroll(function(){
		let position = $(this).scrollTop(); //scrolled position i.e number of pixels down 
		// console.log(position);
		if(position >= 718) {
			$('.navbar').addClass('navbar_background');
			$('.navbar').addClass('fixed-top')
		}
		else {
			$('.navbar').removeClass('navbar_background');
			$('.navbar').removeClass('fixed-top')	
		}
	})




	//smooth scroll
	$('.nav-item a,.down_arrow,.back_to_top').click(function(link){
		link.preventDefault();
		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop:$(target).offset().top - 15
		},2000);
	})




	//back to top
	$(window).scroll(function(){
		let position = $(this).scrollTop(); //scrolled position i.e number of pixels down 
		if(position >= 718) {
			$('.back_to_top').addClass('scroll_top');
			if(position > 2845) {
				$('.back_to_top').addClass('scroll_top_bg');	
			}
			else {
				$('.back_to_top').removeClass('scroll_top_bg');
			}			
		}

		else {
			$('.back_to_top').removeClass('scroll_top');
		}
	})




	//water ripples
	$(".ripples, .container_info").ripples({
  		dropRadius: 25,
  		perturbance: 0.6,
	});


	

	//magnific popup
	$('.parent-container').magnificPopup({
		  delegate: 'a', // child items selector, by clicking on it popup will open
		  type: 'image',

		  gallery:{
		   enabled:true
		}
		  // other options
	});

});