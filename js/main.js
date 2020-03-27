$(document).ready(function(){

	//nav bar toggler btn
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')

	})

	//navbar padd less and making fixed after 718px scrol 	led
	$(window).scroll(function(){
		let position = $(this).scrollTop(); //scrolled position i.e number of pixels down 
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
	$('.nav-item a').click(function(link){
		link.preventDefault();
	})


	//water ripples
	$("#header .container, .container_info").ripples({
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