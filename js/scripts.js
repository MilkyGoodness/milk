$(document).ready(function(){

    $("#confirm").click(function() {
        $("a.confirm").removeClass('confirm').addClass('event');
    });

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
    
    $(".items").click(function() {
        $("#notification").fadeIn().delay(1200).fadeOut();
        $("#milk-kart").css("background-position", -40);
    });

});

