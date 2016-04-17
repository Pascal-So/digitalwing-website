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

	
	var speedFactor = 1;
	

	var currentScroll=0;
	var sections = ["body", "#skills", "#project", "#about"];
	var heights = sections.map(getHeight);
	


	function getHeight(element){
		return $(element).offset().top;
	}


	function scrollToNextSection(heightsArray, currentScroll){
		var index = 0;
		while(index<heightsArray.length && heightsArray[index]<currentScroll+69){
			index++;
		}
		if(index>=heightsArray.length){
			//doNothing
		}else{
			scrollToPosition(heightsArray[index], 100);
		}
	}

	function scrollToPreviousSection(heightsArray, currentScroll){
		var index = 0;
		while(index+1<heightsArray.length && heightsArray[index+1]<currentScroll-62){
			index++;
		}
		scrollToPosition(heightsArray[index], 100);
	}

	function scrollToPosition(position, duration){
		$('html, body').animate({ scrollTop:  position}, duration);
		snapActive = false;
	}



	$('#skillsLink').click(function(e){
		scrollToPosition($('#skills').offset().top, 400*speedFactor);
	});
	$('#aboutLink').click(function(e){
		scrollToPosition($('#about').offset().top, 500*speedFactor);
	});
	$('#projectLink').click(function(e){
		scrollToPosition($('#project').offset().top, 600*speedFactor);
	});
	$('#titleLink').click(function(e){
		scrollToPosition($('#title').offset().top, 500*speedFactor);
	});




	$(document).keydown(function(event){
		//alert(event.keyCode);
		heights = sections.map(getHeight);
		currentScroll = $(window).scrollTop();
		switch(event.keyCode){
			case 34: //pagedown
			//case 40: //arrowdown
			event.preventDefault();			
			scrollToNextSection(heights, currentScroll);
			break;
			case 33: //pageup
			//case 38: //arrowup
			event.preventDefault();
			scrollToPreviousSection(heights, currentScroll);
			break;
		}
	});



});
