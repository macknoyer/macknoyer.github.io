(function($) {
	$(function() {
		$('.form_select').select2({
			minimumResultsForSearch: Infinity
		});
		$('.car_name_wrap').click(function () {
			$(this).children('.search_results').toggleClass('active');
			$(this).children('.search_box').toggleClass('active');
		});
		$('.add_fav_link').click(function(){
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).children('.fa').removeClass('fa-star-o');
				$(this).children('.fa').addClass('fa-star');
			}
			else {
				$(this).children('.fa').addClass('fa-star-o');
				$(this).children('.fa').removeClass('fa-star');
			}
		});
		$('ul.colors li a').click (function (){
			$(this).toggleClass('active'); 
		if ($(this).hasClass('active')) {
			$(this).parent().find('ul.colors li input[type="checkbox"]').attr('checked', true);
		}
		else {
			$(this).parent().find('ul.colors li input[type="checkbox"]').attr('checked', false);
		}
		});
		$('.link_border').click(function(){
			$(this).next('.review_popup').show();
		});
		$('.review_popup_close').click(function(){
			$(this).parent().hide();
		});
		$('.humb_link').click(function () {
    		$(this).parent().find('.header_menu').slideToggle();
		});
  var owl = $("#slider1");
  var owl2 = $("#slider2");
        
         $(window).on("load", function () {
         	owl.owlCarousel({
    loop:false,
    margin:10,
    items:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        },
        1920:{
            items:5,
            nav:true,
            loop:false
        }

    }
  }); 
  owl2.owlCarousel({
    loop:false,
    margin:80,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        1920:{
            items:3,
            nav:true,
            loop:false
        }

    }
  });
        });
  
	 $('.btn.next').click(function() {
	   owl.trigger('next.owl.carousel');
	});

	 $('.btn_slider2.prev2').click(function() {
	   owl2.trigger('next.owl.carousel');
	});

	 $('.btn_slider2.next2').click(function() {
	   owl2.trigger('prev.owl.carousel');
	});

    var maxHeight = -1;

    // $('.wrap50').each(function() {
    //   maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    // });

    // $('.wrap50').each(function() {
    //   $(this).height(maxHeight);
    // }); 	 
});
})(jQuery);
function popup_open(name_popup){
 jQuery("#wrapper_popup").fadeIn(0);
 jQuery("#background_popup").fadeIn(0);
 jQuery("#background_popup").css({"height": "auto"});
 jQuery("#"+name_popup).css({"display": "block", "top": "0px"});
 jQuery('body').addClass('modal-open');
}

function popup_close(){
 jQuery("#wrapper_popup").fadeOut(0);
 jQuery("#background_popup").fadeOut(0);
 jQuery(".popup").fadeOut(0);
 jQuery('body').removeClass('modal-open');
}
