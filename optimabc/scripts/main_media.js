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
});