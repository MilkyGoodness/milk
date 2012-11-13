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

    $("#item3").hover(function() {
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
            $("#popular-list, .popular-list-edit").fadeOut();
            $("#item-list").fadeIn();
            $("#categories, #price").fadeIn();
        } else {
            $("#item-list").fadeOut();
            $("#featured-list").fadeIn();
            $("#popular-list, .popular-list-edit").fadeIn();
            $("#categories, #price").fadeOut();
        }
        
        
    });

    $(window).unload(function() {
        $('body').scrollTop(0);
    });
    
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 250) {
            $('form, #icons').css('position', 'fixed');
            $('form').css('top', 20);
            $('#icons').css('top', 19);
          
        } else {
            $('form, #icons').css('position', 'absolute');
            $('form').css('top', 300);
            $('#icons').css('top', 300)
        }
        if ($(document).scrollTop() >= 320) {
            $('#blue').css('position', 'fixed');
            $('#blue').css('top', -320)
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
        localStorage.setItem('checkoutData','[{id:3,name:"Starbucks Breakfast Blend",start_date:"2012-07-11",freq:2}]');
    });   
    

    $("#search-box").keyup($.debounce( 500, function() {

		if ($("#search-box").val().length > 1)
		{
			$.get(
			  'samples/sampleItemSearch.php',
			  { q: $("#search-box").val() },
			  function(data) {				
				//console.log(data);

				html ='';
                var items = 0;
                var exitClose = false;
				for(key in data)
				{
					if(data[key].price != null )
					{
                        if(items%4 == 0) {
                            html += '<ul>';
                            exitClose = true;
                        }
                        items++;
						html += '<li id="'+data[key].sku+'" class="items">';
						html += '<img src="'+data[key].imageUrl+'" alt="" style="max-width:200px; max-height:250px;"/>';
						html += '<div class="detail"><div class="price">'+data[key].price+'</div><div class="title">'+data[key].title+'</div></div>';
						html += '</li>';
                        if(items%4 == 0) {
                            html += '</ul>';
                            exitClose = false;
                        }
					}
				}
                if(exitClose) {
                    html += '</ul>';
                }
				$('#item-list').html(html);
				$('#item-list').show();
			  },
			  'json'
			);	
		}
	}));
});

