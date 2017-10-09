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
	});
})(jQuery);
