$(window).scroll(function(){
    $("#indice").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft()) + "px"});
  });