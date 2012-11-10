$(document).ready(function(){

    $(".items").hover(function() {
        $(this).children[0].css("left", -150);
    });

});