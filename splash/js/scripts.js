$(document).ready(function(){

    $(window).unload(function() {
        $('body').scrollTop(0);
    });

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
            $("#categories, #sort-by").fadeIn();
        } else {
            $("#item-list").fadeOut();
            $("#featured-list").fadeIn();
            $("#popular-list").fadeIn();
            $("#categories, #sort-by").fadeOut();
        }
    });
    
    $(".items").click(function() {
        $("#notification").fadeIn().delay(1200).fadeOut();
        $("#milk-kart").css("background-position", function() {
            return ($("#milk-kart").css("background-position").split('px')[0] - 40);
        });
    });

    $(document).scroll(function() {
        if ($(document).scrollTop() >= 230) {
            $('form').css('position', 'fixed');
            $('form').css('top', 20);
        } else {
            $('form').css('position', 'absolute');
            $('form').css('top', 250);
        }
        if ($(document).scrollTop() >= 310) {
            $('#blue').css('position', 'fixed');
            $('#blue').css('top', -310)
        } else {
            $('#blue').css('position', 'absolute');
            $('#blue').css('top', 0)

        }
    });

});

