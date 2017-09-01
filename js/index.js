var cont=0;
$(function() {
  $('.imgcv').unslider({
  animation: 'fade',
  arrows: false
  });
  $("#boton1").click(function() {
    console.log("hola");
    $(".sobre-mi").fadeIn(2000);
  });
  $("#cat").click(function(){
    console.log("hola3");
    $("#image-cat").fadeIn(2000);
  });
  $("#boton2").click(function(){
    cont++;
    $(".mas-sobre-mi").fadeIn(1000);
    $("#enchulador").css({"display":"flex "});
    if(cont%2==0){
      $("#enchulador").css({"display":"none "});
    }
  });
  $('.draggable').draggable({helper: "clone"});
  $('.draggable').bind('dragstop', function(event, ui) {
    $(this).after($(ui.helper).clone().draggable());
  });
});
