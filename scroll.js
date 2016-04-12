$(function(){
	
	var currentScroll=0;
	var snapActive = true;
	var sections = ["body", "#skills", "#about", "#project"];
	var heights = sections.map(getHeight);
	var viewportHeight = window.innerHeight;

	function inRange(height){
		return Math.abs(height-currentScroll)<viewportHeight/2.2;
	}

	function getHeight(element){
		return $(element).offset().top;
	}

	$(window).scroll(function(){
		currentScroll = $(this).scrollTop();
		var target = heights.filter(inRange);
		//console.log(target);
		if(target.length > 0){
			if(snapActive){
				snapActive = false;
				$('html, body').animate({
		    		scrollTop: target[0]//$(target[0]).offset().top 
				}, 400);
			}
		}else{
			if(snapActive == false){
				heights = sections.map(getHeight);
				viewportHeight = window.innerHeight;
				snapActive = true;
			}
		}
	});

});


/*

var lastScroll = 0;
var index = 0;

var scrollActive = true;

$(window).scroll(function(){
	if(scrollActive==true){

		var currentScroll = $(this).scrollTop();
		//console.log(lastScroll);
		//console.log(currentScroll);
		if(currentScroll>lastScroll){
			index++;
			if(index==4) index = 3;
			
		}else{
			index--;
			if(index<0) index = 0;
		}
		lastScroll = currentScroll;
		disableScroll();
		scrollTo(index);
		setTimeout(enableScroll, 1000);
	}	
});

function scrollTo(index){
	//console.log(sections[index]);
	//console.log($(sections[index]).offset().top);
	$('html, body').animate({
    	scrollTop: $(sections[index]).offset().top 
	}, 100);
};



var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
 	scrollActive = false;
	if (window.addEventListener) // older FF
	  window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
	scrollActive=true;
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}*/