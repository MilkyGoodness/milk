$(document).ready(function(){

    $(window).unload(function() {
        $('body').scrollTop(0);
    });

    if (Math.floor(Math.random()*11) > 5) {
        $("iframe").attr("src", "https://docs.google.com/spreadsheet/embeddedform?formkey=dFE2LXpxZjNZOXJqNHppXzJha3poMGc6MQ&bc=77C4FF&tc=fff&f=helvetica&ttl=0");
        console.log("inside");
    }

    console.log("what");

});

