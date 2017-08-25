(function($) {
	$(function() {
		$('.plan_block_link a').mouseover(function(){
			$(this).parent().parent().find('.plan_img').addClass('active');
		});
		$('.plan_block_link a').mouseleave(function(){
			$(this).parent().parent().find('.plan_img').removeClass('active');
		});
		$('.plan_img').mouseover(function(){
			$(this).next('.plan_block_link').children('a').addClass('active');
		});
		$('.plan_img').mouseleave(function(){
			$(this).next('.plan_block_link').children('a').removeClass('active');
		});
	});
})(jQuery);