$( document ).ready(function() {
    console.log( "ready!" );
    AOS.init();
    setTimeout(function(){
        $('.loader').find('.logo').addClass('fast-rotate');
        $('.loader').addClass('loader-hide');
    }, 2500);
    if($('.loader').hasClass('loader-hide')){
        $('.loader').remove();
    }
});  