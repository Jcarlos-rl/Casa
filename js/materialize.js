$(document).ready(function(){
    $('.slider').slider({
        height: 500
    });
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});

$(document).ready(function(){
    var flag=false;
    var scroll;
    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        if(scroll > 50){
            if(!flag){
                $(".logo-nav").css({"margin-top": "0px","width": "200px","background-colo":"white"});
                flag=true;
            }
        }else{
            if(flag){
                $(".logo-nav").css({"margin-top": "35px", "width": "270px","transition":"0.3s","background-colo":"white"});
                flag=false;
            }
        }
    });
});