/****************************************************
 *  start jquery functions after loading
 *  sukedesign 20180717
 ****************************************************/
$(document).ready(function(){    
    $(window).on('scroll', function() {
        var body = $('body');
        if ($(document).scrollTop() > 150 ) {
            $(body).addClass('scroll'); 
        }
        else {
            $(body).removeClass('scroll');
        }
    });
});