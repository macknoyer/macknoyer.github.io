(function($) {
	$(function() {
		   $(window).scroll(function(){
				  var scro = parseInt($(this).scrollTop(),10);
		   if (scro>5) {
			   $( ".topbar" ).addClass( 'fixed_header');
			   $( ".light_logo" ).addClass( 'fixed');
			   $( ".standart_logo" ).addClass( 'fixed');
		   }
		   else if (scro<5) {
			   $( ".topbar" ).removeClass( 'fixed_header');
			   $( ".light_logo" ).removeClass( 'fixed');
			   $( ".standart_logo" ).removeClass( 'fixed');
		   }
		   });
	});
})(jQuery);