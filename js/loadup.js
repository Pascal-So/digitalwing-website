$(function(){
	$(window).focus(function() {
		setTimeout(function(){
			var viewportHeight = window.innerHeight;
			$("header").css("height", viewportHeight + "px");
			$(".section").css("min-height", viewportHeight + "px");
			$(".sectionFlexContainer").css("min-height", viewportHeight + "px");
		}, 500);
	});
	
	$(".skillLink").attr("href", "#skills");
	$(".navlink > a").attr("href", "#title");

});
