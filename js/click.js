$(function(){
	
	setTimeout(function(){
		$(".email").click(function(){
			var stringA = "mailto:contac";
			var stringB = "t@digitalwing.ch";
			window.location.href = stringA + stringB;
		});


		$(".ytLink").click(function(e){
			if(window.innerWidth < 750){
				return;
			}
			$("#ytOverlay").removeClass("invisible");
			$("#screenDarkener").removeClass("invisible");
			var options = "autoplay=1&rel=0&enablejsapi=1";
			var id = $(this).attr('id');
			var padding = $(this).attr('aspect');
			$("#ytOverlay").css("padding-bottom", padding);
			$("#hereBePlayer").html("<iframe src=\"https://www.youtube.com/embed/" + id + "?" + options + "\" frameborder=\"0\" allowfullscreen></iframe>");

		});

		
		$("#closeButton").click(function(){
			closeOverlay();
		})

		$(document).keydown(function(e){
			if(e.keyCode == 27){
				closeOverlay();
			}
		});

		function closeOverlay(){
			$("#hereBePlayer").html("");
			$("#screenDarkener").addClass("invisible");
			$("#ytOverlay").addClass("invisible");
		}
	}, 50);
	//

});