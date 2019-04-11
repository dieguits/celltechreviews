	/**
	 * Load Specs pages
	 * 
	 * date: 04/07/2019
	 * author: Deivid Mafra
	 **/

function loadPage(page) {
    $("#inner_container").load("Views/Specs/" + page + "_Spec.html");
    $("#wowslider-container").hide();
}

$("#Spec_XR").click(function(e){
    e.preventDefault();
    loadPage("XR");
});

$("#Spec_i6").click(function(e){
    e.preventDefault();
    loadPage("i6");
});

$("#Spec_LgG7").click(function(e){
    e.preventDefault();
    loadPage("LgG7");
});

$("#Spec_S10").click(function(e){
    e.preventDefault();
    loadPage("SgS10");
});

$("#Spec_GP13").click(function(e){
    e.preventDefault();
    loadPage("GP13");
});

$("#Spec_HP20").click(function(e){
    e.preventDefault();
    loadPage("HP20");
});