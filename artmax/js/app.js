(function($) {
	$(function() {
  var owl = $(".slider1");
  owl.owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
      singleItem:true,
      navigationText : false,
    loop:true,
    autoWidth:true,
    pagination:false    
  });    
  
$(".next_button").click(function(){$(this).parent().find('.owl-carousel').trigger('owl.next');})

$(".prev_button").click(function(){$(this).parent().find('.owl-carousel').trigger('owl.prev');})

  var owl2 = $(".slider2");
  owl2.owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
      singleItem:true,
      navigationText : false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false
  }); 
  $('select.select1').select2({
    placeholder: "Тип номера",
    allowClear: true,
    minimumResultsForSearch: Infinity
  });
  $('select.select2').select2({
    placeholder: "Количество взрослых",
    allowClear: true,
    minimumResultsForSearch: Infinity
  });
  $('select.select3').select2({
    placeholder: "Количество детей",
    allowClear: true,
    minimumResultsForSearch: Infinity
  });
  $( ".order_form_calendar" ).datepicker({
      showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
      buttonText: "Выбрать дату"
  });

$('.humb_but').click(function () {
    $('.navigation').slideToggle();
});



	});
})(jQuery);