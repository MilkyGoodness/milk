$(document).ready(function(){

    $(".items img").hover(function() {
        $(this).css("left", -200);
    }, function() {
        $(this).css("left", 0);
    });

});
