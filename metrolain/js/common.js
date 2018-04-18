$(function() {

	$(document).ready(function() {
    $(".slider_index_top").owlCarousel({
    	items:1,
    	dots: true,
    	dotsContainer: '#customDots'
    });

var owl = $('#slider_index2');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:44,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
var owl2 = $('#slider_index3');
owl2.owlCarousel({
    loop:true,
    nav:true,
    margin:44,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
owl2.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl2.trigger('next.owl');
    } else {
        owl2.trigger('prev.owl');
    }
    e.preventDefault();
});

var owl3 = $('#slider_index4');
owl3.on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) return 
   	var carousel = e.relatedTarget
    $('.counter').html('<span style="color: #c70256;">' + (carousel.relative(carousel.current()) + 4) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  carousel.items().length + '</span>')
  }).owlCarousel({
    loop:false,
    nav:true,
    navText: false,
    margin:22,
    navContainerClass: 'navContainer',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
var owl4 = $('#slider_index5');
owl4.on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) return 
   	var carousel = e.relatedTarget
    $('.counter').html('<span style="color: #c70256;">' + (carousel.relative(carousel.current()) + 5) + '</span>' +'<span style="color: #999999;">' +  '/' + '</span>' + '<span style="color: #999999;">' +  carousel.items().length + '</span>')
  }).owlCarousel({
    loop:false,
    nav:true,
    navText: false,
    margin:22,
    mouseDrag: false,
    dots: false,
    navContainerClass: 'navContainer',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
  		$('.content__block-inputs-quantity-input').on('input change paste', function() {
		  $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
		});

		$('.content__block-inputs-quantity > div').on('click', function() {
		  var input = $(this).closest('.content__block-inputs-quantity').find('.content__block-inputs-quantity-input'); // инпут
		  var value = parseInt(input.val()) || 0; // получаем value инпута или 0
		  
		  if ($(this).hasClass('content__block-inputs-quantity-minus')) {
			value = value - 1; // вычитаем из value 1
		  }
		  if ($(this).hasClass('content__block-inputs-quantity-plus')) {
			value = value + 1; // прибавляем к value 1
		  }
		  input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
		});
    });


});
