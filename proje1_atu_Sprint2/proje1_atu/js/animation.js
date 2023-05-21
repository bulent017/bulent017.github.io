$(document).ready(function(){
    setTimeout(function(){
      $('#headerHome').fadeIn(1000);
    }, 0); // 1000 milisaniye sonra fadeIn başlar.
  });



  /*
  $(document).ready(function() {
    var navOffset = $("nav").offset().top;

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if (scrollPos >= navOffset) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
});
*/

$(document).ready(function(){
    $("h2").hover(
    function(){
        $(this).css("transform", "scale(1.2)"); // Üzerine gelindiğinde büyütme
    },
    function(){
        $(this).css("transform", "scale(1)"); // Üzerinden çekildiğinde normal boyuta döndürme
    });
});

/*
$(document).ready(function(){
    $(".nav-links ul li").hover(function(){
        $(this).effect("shake");
    });
});
*/

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({ // Burada slide efekti yaptık
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
    });
  });


  $(document).ready(function() {    // // cursor gelince hafif rengini açıyor
    $(".testimonials-col").mouseover(function() {
        $(this).addClass('hoverHome');
    }).mouseout(function() {
        $(this).removeClass('hoverHome');
    });
});


$(document).ready(function() {   // cursor gelince hafif rengini açıyor
    $(".course-col").mouseover(function() {
        $(this).addClass('hoverHome');
    }).mouseout(function() {
        $(this).removeClass('hoverHome');
    });
});