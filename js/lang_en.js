$(function(){
	
	var titleSkills =     "Expertise";
	var titleProject =    "Realizing your&nbsp;Project";
	var titleAbout = "About us";
	var titlePebble = "The crew";
	var titleRecent = "Recent projects";
	
	var skillDynamicTitle = "Dynamic shots";
	var skillDynamicText = "Tired of static perspectives? We change perspective for every shot. We also offer smooth camera movements that emphasize the action. We find the most interesting looking angles without missing a moment.";
	
	var skillLowLightTitle = "Available Light";
	var skillLowLightText = "The atmosphere in your nightclub or the ambience during the moonlight scene are decisive for the success of your event. For the film crew this means harsh and unfriendly lighting conditions. We preserve this special vibe without unneeded heavy lighting equipment.";
	
	var skillEditingTitle = "Editing and Effects";
	var skillEditingText = "Whether it is an action packed commercial or a frugal documentary, our experience in 2D and 3D visual effects can enrich your production. When it comes to giving your project the finishing touch, we offer an individual soundtrack as well as enhancing the footage with a vibrant colour grade.";
	
	var skillFlexibleTitle = "Flexibility";
	var skillFlexibleText = "Thanks to our state-of-the-art and lightweight equipment we're not stopped by crowded events or rural places that are hard to reach. We're well networked within the community of filmmakers. On demand and with your approval we'll bring in further experts. We do everything for the shot.";
	
	var projectText = "Whether it's a commercial you're planning, a concert, a music video or just about any other event, we're looking forward to working with you. Our process begins with an initial conversation with you, during which we note down your basic expectations and conditions. With that information we'll create an individual offer. Of course we'll stay in direct contact during the realization of your project. <br><br>Go ahead and send us an <span class='email'>email</span> to get started!";
	
	var aboutDWLeftText = "We're a small studio based in <span itemprop='areaServed'>Bern</span> and <span itemprop='areaServed'>Zurich</span>. Filmmaking is our passion. We started working together during schooldays, and have been practicing ever since. " + 
			"<table>" +
			
			"</table>";
	var aboutDWRightText = "Due to our simple yet efficient workflow, we can finish projects in a relatively short amount of time."; 
	var aboutDWList = "<table>" +
			"<tr><th class='firstTh'>2016</th></tr>" +
			"<tr><td>November</td><td class='centerTd'>Seelandindoorcycling 2016</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=cyaQJswTQCM' target='' id='cyaQJswTQCM' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Watch</a></td></tr>" +
			"<tr><td>October</td><td class='centerTd'>Skye at Cybathlon 2016</td></tr>" + 
			"<tr><td>April</td><td class='centerTd'>Promo for Skye by Aerotainment Labs</td><td><a class='aboutLink ytLink' href='https://youtu.be/DszwR1-fmLs' target='_blank' id='DszwR1-fmLs' aspect='34.4%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Watch</a></td></tr>" +
			"<tr><td>February</td><td class='centerTd'>Music video <q>Fly</q> (4K)</td><td><a class='aboutLink ytLink' href='https://youtu.be/NL3joKd7P-A' target='_blank' id='NL3joKd7P-A' aspect='34.4%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Watch</a></td></tr>" +
			"<tr><th>2015</th></tr>" +
			"<tr><td>December</td><td class='centerTd'>Short video of Aerotainment at the UZH</td></tr>" +
			"<tr><td>November</td><td class='centerTd'>Promo Seelandindoorcycling</td><td><a class='aboutLink ytLink' href='https://youtu.be/RFJGh29AScw' target='_blank' id='RFJGh29AScw' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Watch</a></td></tr>" +
			"<tr><td>September</td><td class='centerTd'>Medieval Fair Kiesen</td><td><a class='aboutLink ytLink' href='https://youtu.be/41R56juAyfA' target='_blank' id='41R56juAyfA' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Watch</a></td></tr>" +
			"</table>";
	
	var aboutFabianText = "Be it a DV camcorder or a modern movie camera, Fabian has always felt a bias towards the moving image. If he can't be found he's most likely out hunting for locations in the mountains.";
	var aboutPascalText = "After taking up photography in 2012, Pascal kept trying to find out new ways to capture motion in a still image. Whenever possible, he's always happy to bring in knowledge from some of his other favourite activities, such as computer science or music.";
	
	var language = (window.navigator.userLanguage || window.navigator.language).substr(0,2);
	
	
	if (language != "de"){
		switchToEN();
	}
	$("#langLinkEN").click(function(){
		switchToEN()
	});
	
	function switchToEN(){
		$(".titleSkills").html(titleSkills);
		$(".titleProject").html(titleProject);
		$(".titleAbout").html(titleAbout);
		$(".titlePebble").html(titlePebble);
		$(".titleRecent").html(titleRecent);
		$("#skillDynamicTitle").html(skillDynamicTitle);
		$("#skillDynamicText").html(skillDynamicText);
		$("#skillLowLightTitle").html(skillLowLightTitle);
		$("#skillLowLightText").html(skillLowLightText);
		$("#skillEditingTitle").html(skillEditingTitle);
		$("#skillEditingText").html(skillEditingText);
		$("#skillFlexibleTitle").html(skillFlexibleTitle);
		$("#skillFlexibleText").html(skillFlexibleText);
		$("#projectText").html(projectText);
		$("#aboutDWLeftText").html(aboutDWLeftText);
		$("#aboutDWRightText").html(aboutDWRightText);
		$("#aboutDWList").html(aboutDWList);
		$("#aboutFabianText").html(aboutFabianText);
		$("#aboutPascalText").html(aboutPascalText);
	}
})