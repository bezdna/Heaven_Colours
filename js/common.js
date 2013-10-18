var ww = document.body.clientWidth;

$(document).ready(function() {
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
  ww = document.body.clientWidth;
  adjustMenu();
});

var adjustMenu = function() {
  if (ww < 939) {
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
  else if (ww >= 939) {
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

$(document).ready(function() {
     $(window).ready(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 168,
        itemMargin: 18,
        minItems: 3,
        maxItems: 3
      });
    });
     
});
$(window).load(function(){
      $('.product_slide').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
         directionNav: true,
        manualControls: ".flex-control-nav .flex"
      });      
      
      $('.flex-control-nav').wrap('<div class="flex-control-nav-wrapper"></div>');
      $('.flex-direction-nav').css({
        width: $('.flex-control-nav').outerWidth()+ 'px',
        marginLeft: '-' + $('.flex-control-nav').outerWidth()/2 + 'px'
      });
    });