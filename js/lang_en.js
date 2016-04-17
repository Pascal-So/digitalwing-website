$(function(){
	
	var titleSkills =     "Expertise";
	var titleProject =    "Realizing your&nbsp;Project";
	var titleAbout = "About us";
	
	var skillDynamicTitle = "Dynamic shots";
	var skillDynamicText = "Tired of static perspectives? We change perspective for every shot. We also offer smooth camera movements that emphasize the action. We find the most interesting looking angles without missing a moment.";
	
	var skillLowLightTitle = "Available Light";
	var skillLowLightText = "The atmosphere in your nightclub or the ambience during the moonlight scene are decisive for the success of your event. For the film crew this means harsh and unfriendly lighting conditions. We preserve this special vibe without unneeded heavy lighting equipment.";
	
	var skillEditingTitle = "Editing and Effects";
	var skillEditingText = "Whether it is an action packed commercial or a frugal documentary, our experience in 2D and 3D visual effects can enrich your production. When it comes to giving your project the finishing touch, we offer an individual soundtrack as well as enhancing the footage with a vibrant colour grade.";
	
	var skillFlexibleTitle = "Flexibility";
	var skillFlexibleText = "Thanks to our state-of-the-art and lightweight equipment we're not stopped by crowded events or rural places that are hard to reach. We're well networked within the community of filmmakers. On demand and with your approval we'll bring in further experts. We do everything for the shot."
	
	var projectColumn0Text = "Whether it's a commercial you're planning, a concert, a music video or just about any other event, we're looking forward to working with you. During our conversation we'll note down basic conditions and expectations. With that information we'll create an individual offer. Of course we'll stay in direct contact during the realization of your project. Go ahead and send us an <span class='email'>email</span> to get started!";
	var projectColumn1Text = "Feel free to contact us with inquiries about estimated time frames. We'll do our best to give you an accurate prediction after discussing your plans with you.";
	
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
		$("#skillDynamicTitle").html(skillDynamicTitle);
		$("#skillDynamicText").html(skillDynamicText);
		$("#skillLowLightTitle").html(skillLowLightTitle);
		$("#skillLowLightText").html(skillLowLightText);
		$("#skillEditingTitle").html(skillEditingTitle);
		$("#skillEditingText").html(skillEditingText);
		$("#skillFlexibleTitle").html(skillFlexibleTitle);
		$("#skillFlexibleText").html(skillFlexibleText);
		$("#projectColumn0Text").html(projectColumn0Text);
		$("#projectColumn1Text").html(projectColumn1Text);
		$("#aboutFabianText").html(aboutFabianText);
		$("#aboutPascalText").html(aboutPascalText);
	}
})