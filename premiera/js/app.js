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
      autoplay:false,
      loop:true,
    autoplayTimeout:5000
  });  


var dot = $('#slider1 .owl-dot');
dot.each(function() {
  var index = $(this).index();
  $(this).text(index + 1);
  });

$('.humb_but').click(function () {
    $(this).parent().children('.navigation').slideToggle();
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


  var owl4 = $("#slider4");
  owl4.owlCarousel({ 
    margin:0,
    nav:true,
    navText:false, 
    items:4,
      slideSpeed : 300,
      singleItem: false,
      pagination: false,
      rewindSpeed: 500,
      autoplay:true,
      loop:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },  
        768:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        },
        1100:{
            items:4,
            nav:true
        }
      }    
  });  
$('.next_button').click(function() {
    owl4.trigger('next.owl.carousel');
});
// Go to the previous item
$('.prev_button').click(function() {
    owl4.trigger('prev.owl.carousel');
});

  var owl3 = $("#slider3");
  owl3.owlCarousel({ 
    margin:10,
    nav:false,
    pagination:true,
    items:1,
      slideSpeed : 300,
      singleItem: false,
      pagination: false,
      rewindSpeed: 500,
      autoplay:true,
      loop:false,
    autoplayTimeout:5000
  });
$(".employee_filter li").click(function(){
  $(this).toggleClass('active');
});
	});
})(jQuery);