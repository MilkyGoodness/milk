$(document).ready(function(){

    $(".items img").hover(function() {
        $(this).css("left", -200);
    }, function() {
        $(this).css("left", 0);
    });

    $("#search-box").keyup(function() {
        if ($(this).val()) {
            $("#featured-list").fadeOut();
            $("#popular-list").fadeOut();
            $("#item-list").fadeIn();
        } else {
            $("#item-list").fadeOut();
            $("#featured-list").fadeIn();
            $("#popular-list").fadeIn();
        }
    });

});
