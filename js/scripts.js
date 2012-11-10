$(document).ready(function(){

    $(".items img").hover(function() {
        $(this).css("left", -200);
        $('.duration').show();
    }, function() {
        $(this).css("left", 0);
        $('.duration').hide();
    });

    $(".duration").hover(function() {
        $(this).css("font-weight", bold);
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
