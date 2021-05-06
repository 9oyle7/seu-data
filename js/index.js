



  $(function(){
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
   /* 
    $(".service-alert").click(function(){
      $("#alert-show").fadeTo(1000, 1);




    });


    $('#alert-show-on, #alert-show-off').toggle();
    */
  

      $('#alert-show-off').show( function () {
        $('.service').addClass('off');
      });
      $('#alert-show-on').hide();
  

   
});






