$(document).ready(function(){

    /* START action on each item */
    $(".items").click(function() {
        $("#notification").fadeIn().delay(1200).fadeOut();
        $("#milk-kart").css("background-position", function() {
            return ($("#milk-kart").css("background-position").split('px')[0] - 40);
        });
        
    });

    $(".items img").hover(function() {
        $(this).css("left", -200);
        $('.duration').show();
    }, function() {
        $(this).css("left", 0);
        $('.duration').hide();
    });

    $("#item4").hover(function() {
        $('#item-overlay').show();
    }, function() {
        $('#item-overlay').hide();
    });
    /* END action on each item */

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

    $(window).unload(function() {
        $('body').scrollTop(0);
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

    /* CHECKOUT */
    $("#confirm").click(function() {
        $("a.confirm").removeClass('confirm').addClass('event');
    });

    // send message from product page
    // NOTE:: can implement twice a month!
    // NOTE:: need to clear cache after making changes
    $(".items li#demo-1").click(function() {
        localStorage.setItem('checkoutData','[{id:3,name:"Hamsters",start_date:"2012-07-11",freq:2}]');
    });

});

