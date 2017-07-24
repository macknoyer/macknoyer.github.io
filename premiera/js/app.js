(function($) {
	$(function() {
  var owl = $("#slider1");
  owl.owlCarousel({
    navigation : false, 
    items:1,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      pagination: true,
      paginationNumbers: true,
      rewindSpeed: 500,
      autoplay:true,
      loop:true,
    autoplayTimeout:5000
  });  


var dot = $('#slider1 .owl-dot');
dot.each(function() {
  var index = $(this).index();
  $(this).text(index + 1);
  });


  var owl2 = $("#slider2");
  owl2.owlCarousel({ 
    margin:10,
    nav:true,
    items:3,
      slideSpeed : 300,
      singleItem: false,
      pagination: false,
      rewindSpeed: 500,
      autoplay:true,
      loop:true,
    autoplayTimeout:5000
  });  
$('.next_button').click(function() {
    owl2.trigger('next.owl.carousel');
});
// Go to the previous item
$('.prev_button').click(function() {
    owl2.trigger('prev.owl.carousel');
});


  var owl3 = $("#slider3");
  owl3.owlCarousel({ 
    nav:true, 
    items:1,
     singleItem: true,
      slideSpeed : 300,
      rtl:true
  }); 
	});
})(jQuery);