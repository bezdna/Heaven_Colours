var ww = $(document).width();

$(document).ready(function() {
  $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        touch: true,  
        itemWidth: 168,
        itemMargin: 18,
        minItems: 3,
        maxItems: 3
      });
     $('.product_slide').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: true,
        touch: true
      });
      $('.carousel .flex-control-nav').wrap('<div class="flex-control-nav-wrapper"></div>');
      $('.carousel .flex-direction-nav').css({
        width: $('.flex-control-nav').outerWidth()+ 'px',
        marginLeft: '-' + $('.flex-control-nav').outerWidth()/2 + 'px'
      });
  $(".nav li a").each(function() {
    if ($(this).next().length > 0) {
      $(this).addClass("parent");
    };
  })
  
  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav").toggle();
  });
  adjustMenu();
})

$(window).bind('resize orientationchange', function() {
  ww = $(document).width();
  adjustMenu();
});

var adjustMenu = function() {
  if (ww < 922) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent").unbind('click').bind('click', function(e) {
      // must be attached to anchor element to prevent bubbling
      e.preventDefault();
      $(this).parent("li").toggleClass("hover");
    });
  } 
  else if (ww >= 923) {
    $(".toggleMenu").css("display", "none");
    $(".nav").show();
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind('click');
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
      // must be attached to li so that mouseleave is not triggered when hover over submenu
      $(this).toggleClass('hover');
    });
  }

}
  

