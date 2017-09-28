(function($) {
	$(function() {
		$('.form_select').select2({
			minimumResultsForSearch: Infinity
		});
		$('.car_name_wrap').click(function () {
			$(this).children('.search_results').toggleClass('active');
			$(this).children('.search_box').toggleClass('active');
		});
	});
})(jQuery);
