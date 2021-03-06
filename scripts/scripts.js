
$(document).ready(function() {
	 
	 //author:Sherwayne Palmer
	 
	$("#inner_container" ).load( "views/Home.html" ); //load home page by default
	
	
	$(".home").click(function(){
		
		$( "#inner_container" ).load( "views/Home.html" ); //load home page on click	
       
		if (window.matchMedia("(min-width: 769px)").matches) //if media query size min-width is 769px show slider
		{
			$("#wowslider-container").show();
		}
	});
	
	$(".smartphones").click(function(){
		$( "#inner_container" ).load( "views/SmartPhones.html" ); //load contact us page on click
		$("#wowslider-container").hide();
	});
	
	$(".aboutus").click(function(){
		$( "#inner_container" ).load( "views/AboutUs.html" ); //load contact us page on click
		$("#wowslider-container").hide();
	});
	
	$(".contactus").click(function(){
		$( "#inner_container" ).load( "views/ContactUs.html" ); //load contact us page on click
		$("#wowslider-container").hide();
	});
	
	$(".faqs").click(function(){
		$( "#inner_container" ).load( "views/FAQs.html" ); //load contact us page on click
		$("#wowslider-container").hide();
	});
	$(".partners").click(function(){
		$( "#inner_container" ).load( "views/partners.html" ); //load partners us page on click
		$("#wowslider-container").hide();
	});
	$('.home a').addClass('highlight'); //set home to highlighted on page load
	
	$('#headerNav li a').click(function(){
	 $('#headerNav li a').removeClass('highlight');
	 $(this).addClass('highlight');
	});
	
	$(window).resize(function(){ //performs functionality based on screen resize event
		var pageIdent = $("#pageIdent").val();
		
		if (window.matchMedia("(min-width: 769px)").matches && pageIdent == "homePage") //if media query size min-width is 769px show slider
		{
			$("#wowslider-container").show();
		}
		else{
			$("#wowslider-container").hide();
		}
		
	});
	
});


	/**
	 * Get the button, and when the user clicks on it, execute navButton function
	 * 
	 * date: 13/03/2019
	 * author: Deivid Mafra
	 **/
	
	function navButton() {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	/**
	 * navButton toggles between adding and removing the show class,
	 * which is used to hide and show the dropdown content
	 * 
	 * date: 13/03/2019
	 * author: Deivid Mafra
	 **/



	window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
	  	var dropdowns = document.getElementsByClassName("dropdown-content");
	  	var i;
	  	for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
		  	openDropdown.classList.remove('show');
				}
	  	}
	}
  }


  /* code for auto slide*/

/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("cellphoneSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/



