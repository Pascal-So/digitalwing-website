$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&nbsp;&Uuml;ber uns&nbsp;&nbsp;";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Keine Lust mehr auf feste Perspektiven von einem Stativ in der Ecke des Raums? Wir finden für jeden Clip eine neue Position. Übergänge ersetzen wir durch flüssige Kamerabewegungen. Damit wird die Wirkung des Geschehens noch verstärkt. Dank unserer Erfahrung entdecken wir die spannendsten Winkel ohne einen Moment zu verpassen.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "Die Stimmung in der Disko oder das Ambiente der Mondlichtszene sind massgebend für den Erfolg Ihres Events. Für die Filmtechnik sind dies suboptimale Lichtverhältnisse. Jedoch zählt für uns Realismus mehr als jedes kleine Detail. Ohne künstlichen Perfektionismus und ohne unnötige Beleuchtung bieten wir Ihnen die realitätsnahe Wiedergabe der vorhandenen Stimmung.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Ob actiongeladener Werbespot oder schlichter Dokumentarfilm, unsere Erfahrung in zwei- and dreidimensionalen visuellen Effekten bereichert Ihre Produktion. Wenn es um den letzten Schliff Ihres Projekts geht, offerieren/anbieten wir Ihnen gerne einen individuellen Soundtrack und beleben das Material mit einer wirksamen Farbkorrektur.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Wir sind mit einer modernen und vorteilhaft mobilen Technik ausgestattet. Auch sehr belebte Events oder landschaftlich entlegene Orte können wir erreichen. In der Community der Filmemachern sind wir gut vernetzt. Bei Bedarf und nach Absprache mit Ihnennehmen wir weitere Spezialisten in Anspruch . Bei uns zählt, dass Sie am Ende die gewünschte Aufnahme erhalten."
	
	var projectColumn0Text = "Wir freuen uns auf eine produktive Zusammenarbeit, senden Sie uns doch gleich eine <span class='email'>E-Mail</span>!";
	var projectColumn1Text = "";
	
	var aboutFabianText = "";
	var aboutPascalText = "";
	
	var language = (window.navigator.userLanguage || window.navigator.language).substr(0,2);
	
	if (language == "de"){
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