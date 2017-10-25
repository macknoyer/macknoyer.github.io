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
  var owl = $(".owl-carousel");
 
  owl.owlCarousel({
      items : 6, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
 
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })	
	});
})(jQuery);
