// cuộn Backtop
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('#Backtop').fadeIn();
        }else {
            $('#Backtop').fadeOut();
        }
    });
    $('#Backtop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

//  open and close modal
$(document).ready(function() {

    $('.openModal_input').click(function() {
        $('.modal').addClass('openModal');
    });
    $('.openModal_button').click(function() {
        $('.modal').addClass('openModal');
    });
    $('.close_modal').click(function() {
        $('.modal').removeClass('openModal');
    });
    $('.buttonClose_modal').click(function() {
        $('.modal').removeClass('openModal');
    });
});