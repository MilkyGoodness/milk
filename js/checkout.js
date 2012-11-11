function reloadTable() {
    if (localStorage.getItem('checkoutData').length == 0) return;
    var item_data = eval(localStorage.getItem('checkoutData'));
    var finalData = [];

    $.each(item_data, function(key, value) {
        var date = value.start_date.split('-');
        if (typeof finalData[date[2]] === 'undefined') {
            finalData[date[2]] = [];
        } finalData[date[2]].push(value);
    });

    for (key in finalData) {
        $.each(finalData[key], function(subkey,value) {
            for (var i = parseInt(key); i <= 31; i=i+parseInt(value.freq)*7) {
                var html = $('.d'+i+' .pdata').html();
                if (html === null) {
                    $('.d'+i).html('<a href="#" class="confirm">'+i+'<div        class="pdata"></div></a>');
                    html = '';
                } else {
                    $('.d'+i+" a.event").removeClass('event').                   addClass('confirm');
                }
                if ($('.d'+i+" .pdata ."+value.id).length == 0) {
                    //html += '<div class="'+value.id+'">'+value.name+' - $'+value.price+'</div>';
                    html += '<div class="'+value.id+'">'+value.name+'</div>';
                } $('.d'+i+' .pdata').html(html);
            }
        });
    } localStorage.setItem('checkoutData','');
}
reloadTable();
setInterval(reloadTable,1000);
