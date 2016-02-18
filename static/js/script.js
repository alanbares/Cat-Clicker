
$(document).ready(function() {

    // Cat click counter
    var i = 0;
    $('.cat-click').click(function(e) {
        $(this).html(i++);
        console.log(i);
        $('.click-counter').html('<p> Number of Clicks </p>' + i );
    });
});
