$(document).ready(function () {
    
    $('#left').on('click',function(){
        $('#image').animate({left:'-=50'},300,function(){});
    });
    
    $('#right').on('click',function(){
        $('#image').animate({left:'+=50'},300,function(){});
    });
    
     $('#up').on('click',function(){
        $('#image').animate({top:'-=50'},300,function(){});
    });
    
     $('#down').on('click',function(){
        $('#image').animate({top:'+=50'},300,function(){});
    });



});