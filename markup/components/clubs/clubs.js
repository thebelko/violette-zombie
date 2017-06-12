$(document).ready(function(){
    $('.clubs__more').click(function() {
        event.preventDefault();
        $('.clubs__wrapper .one-club:nth-child(4), .clubs__wrapper .one-club:nth-child(5)').addClass('one-club--show');
        $(this).hide();
    });
});
