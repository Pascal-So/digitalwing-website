$(function(){
	$(window).focus(function() {
		setTimeout(function(){
			var viewportHeight = window.innerHeight;
			$("header").css("height", viewportHeight + "px");
			$(".section").css("min-height", viewportHeight + "px");
			$(".sectionFlexContainer").css("min-height", viewportHeight + "px");
		}, 500);
	});
	

	setTimeout(function(){
		if(window.innerWidth >= 750){
			$(".skillLink").attr("href", "#skills");
			$(".aboutLink").attr("href", "#about");
			$(".aboutLink").attr("target", "");
		}
		$(".navlink > a").attr("href", "#title");
	}, 50);
});
