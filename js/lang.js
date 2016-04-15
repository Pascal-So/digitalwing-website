$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&Uuml;ber uns&nbsp;&nbsp;&nbsp;";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Tired of static perspectives shot on a tripod in the corner of the room? Not only do we change perspective for every shot, we can also offer smooth camera movements that emphasize the action. Thanks to our experience we can find the most interesting looking angles and don't miss a moment.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "From the beginning, we've been working in dim and harsh lighting conditions. Our experience allows us to capture the atmosphere in your nightclub or during the moonlight scene without disturbing the moment with heavy lighting equipment. We favour realism over artificially perfecting every little detail.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Whether it is an action packed commercial or a frugal documentary, our experience in 2D and 3D visual effects can enrich your production. When it comes to giving your project the finishing touch, we can organize a soundtrack for you and enhance the footage with a vibrant colour grade.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Thanks to our lightweight equipment, we're able to reach every location. We are networked with other filmmakers which allows us to bring in specialists. In short: <i>We do everything for the shot.</i>"
	
	var projectColumn0Text = "";
	var projectColumn1Text = "";
	
	var aboutFabianText = "";
	var aboutPascalText = "";
	
	var language = (window.navigator.userLanguage || window.navigator.language).substr(0,2);
	
	if (language == "en"){
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