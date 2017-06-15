$(document).ready(function(){
	$('.humb_link').click (function() {
		$('.main_humb ul.menu').show();
		$('.humb_link_close').show();
		$(this).hide()
	});
	$('.humb_link_close').click (function() {
		$('.main_humb ul.menu').hide();
		$('.humb_link').show()
		$('.humb_link_close').hide();
	});     
	$("#owl-adaptive-slider1").owlCarousel({
		      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : false,
      pagination:true
	});	
	$("#owl-adaptive-slider2").owlCarousel({
		      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : false,
      pagination:true
	});
     
});