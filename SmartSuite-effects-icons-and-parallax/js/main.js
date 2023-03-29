$( document ).ready(function() {
    
    console.log( "ready!" );

    setTimeout(function(){
        $('.loader').find('.logo').addClass('fast-rotate');
        $('.loader').addClass('loader-hide');
    }, 2500);
    if($('.loader').hasClass('loader-hide')){
        $('.loader').remove();
    }

    var layer= $('.smart-suite')
    var sm_card= $('.sm-card');
    var description= $('.description');
    var lg_card= $('.lg-card');
    var xs_card= $('.xs-card');

    layer.mousemove(function(e){ 

        var sm_cardX= (e.pageX * -1 / 50);
        var sm_cardY= (e.pageY * -1 / 20);

        var descriptionX= (e.pageX * -1 / 30);
        var descriptionY= (e.pageY * 1 / 30);

        var lg_cardX= (e.pageX * 1 / 70);
        var lg_cardY= (e.pageY * 1 / 70);
        
        var xs_cardX= (e.pageX * -1 / 30);
        var xs_cardY= (e.pageY * -1 / 20);

        sm_card.css('transform', 'translate3d('+sm_cardX+'px,'+sm_cardY+'px, 0)');
        description.css('transform', 'translate3d('+descriptionX+'px,'+descriptionY+'px, 0)');
        lg_card.css('transform', 'translate3d('+lg_cardX+'px,'+lg_cardY+'px, 0)');
        xs_card.css('transform', 'translate3d('+xs_cardX+'px,'+xs_cardY+'px, 0)');
        
    });
});  