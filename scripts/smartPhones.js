$(document).ready(function () {

    $("table tr td").click(function(e){
        //console.log(e.getAttribute());

        //console.log($("table tr td img").html());
    });

    $(".r_LgG7One").click(function(e){
        e.preventDefault();
        goPage("LgG7One");
    });

    $(".r_galaxyS10").click(function(e){
        e.preventDefault();        
        goPage("galaxyS10");
    });

    $(".r_pixel3").click(function(e){
        e.preventDefault();        
        goPage("pixel3");
    });

    $(".r_HuaweiP20").click(function(e){
        e.preventDefault();        
        goPage("HuaweiP20");
    });

    $(".r_iPhoneXR").click(function(e){
        e.preventDefault();
        goPage("iPhoneXR");
    });

    $(".r_iPhone6").click(function(e){
        e.preventDefault();
        goPage("iPhone6");
    });

    function goPage(identifier) {
        //alert("aca vamos " + identifier);
        $("#inner_container").load("views/reviews/review_" + identifier + ".html");
        $("#wowslider-container").hide();
    }


});