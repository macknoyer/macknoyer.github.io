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
		$('.popup_form_check_link').click(function(){
			$(this).toggleClass('active');
		});
		$('.popup_select').select2({
			placeholder: 'Выберите из предлагаемого списка',
			 minimumResultsForSearch: Infinity,
			 allowClear: true
		});
		$('.client_table_td_select').select2({
			placeholder: 'Выбрать',
			 minimumResultsForSearch: Infinity,
			 allowClear: true
		});
		$('.client_table_th_option').click(function(){
			$(this).next('.client_table_th_option_block').toggleClass('active');
		});
		$('.client_table_td_cv').click(function(){
			$(this).next('.client_table_th_option_block').toggleClass('active');
		});
		$('.option_block_link').click(function(){
			$(this).parent().toggleClass('active');
		});

		$('.client_table_th_option_block').mouseleave(function(){
			$(this).removeClass('active');
		});
		$('.client_table_th_option_block_checkbox a').click(function () {
			$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).find('input[type="checkbox"]').attr('checked', true);
			}
		else {
			$(this).find('input[type="checkbox"]').attr('checked', false);
		}
		});
	});
})(jQuery);

/***modal***/
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
/***modal***/