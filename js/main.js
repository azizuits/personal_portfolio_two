
	(function($) {
    'use strict';
  /* START MENU-JS */	
        //Smooth Scroll
        $('.nav-link').on('click', function(e){
          $(".active").removeClass("active");     
          $(this).addClass("active");
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });		

        // Scroll Down Menu 
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
              $('.menu_top').addClass('menu_shrink');
            } else {
              $('.menu_top').removeClass('menu_shrink');
            }                  
          });
/* End Menu Js*/
          /* START ISOTOP JS */
			var $grid = $('.work_content_area').isotope({
                // options
              });
              // filter items on button click
              $('.work_filter').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
              });
              // filter items on button click
              $('.work_filter').on( 'click', 'li', function() {
                  $(this).addClass('active').siblings().removeClass('active')
              });
          /* END ISOTOP JS */
          /* START LIGHTBOX */
		
			lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true
              });
          
          /* END LIGHTBOX JS */

          /* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing', 
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */

    /* START TESTIMONIAL JS */
    $('.testimonial_slider_area').owlCarousel({
      items:3,
      loop:true,
      autoplay:true,
      autoplaySpeed:1000,
      margin:30,
      dots:true,
      nav:true,
      navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
      responsive:{
        320:{
          items:1
        },
        767:{
          items:2
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
  })
		/* END TESTIMONIAL JS */
	
/* Preloader js */
var loader =   document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display ="none";
})
  })(jQuery);