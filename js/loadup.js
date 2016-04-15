$(function(){
	setTimeout(function(){
		var viewportHeight = window.innerHeight;
		$("header").css("height", viewportHeight + "px");
		$(".section").css("min-height", viewportHeight + "px");
	
	}, 500);
})