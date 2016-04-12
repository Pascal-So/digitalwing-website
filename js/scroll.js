function debounce(fn, interval){  //weird pascal implementation: don't trust this because i'm not comfortable with js closures...
	var timeout;
	return function(){
		var clear = function(){
			timeout = null;
		}
		if(timeout==null){
			fn.apply(this, arguments);
			timeout = setTimeout(clear, interval);
		}
	}
}

$(function(){

	var speedFactor = 0.4;

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


	var scrollToPosition = debounce(function(position, duration){
		$('html, body').animate({ scrollTop:  position}, duration);
		snapActive = false;
	}, 700*speedFactor);

	$('#skillsLink').click(function(e){
		e.preventDefault();
		scrollToPosition($('#skills').offset().top, 400*speedFactor);
	});
	$('#aboutLink').click(function(e){
		e.preventDefault();
		scrollToPosition($('#about').offset().top, 500*speedFactor);
	});
	$('#projectLink').click(function(e){
		e.preventDefault();
		scrollToPosition($('#project').offset().top, 600*speedFactor);
	});

	$(window).scroll(function(){
		currentScroll = $(this).scrollTop();
		var target = heights.filter(inRange);
		if(target.length > 0){
			if(snapActive){
				scrollToPosition(target[0], 400*speedFactor);
				snapActive = false;
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
