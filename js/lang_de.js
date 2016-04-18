$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&nbsp;&Uuml;ber uns&nbsp;&nbsp;";
	var titlePebble = "Die Mannschaft";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Keine Lust mehr auf feste Perspektiven von einem Stativ in der Ecke des Raums? Wir finden für jeden Clip eine neue Position. Übergänge ersetzen wir durch flüssige Kamerabewegungen. Damit wird die Wirkung des Geschehens noch verstärkt. Dank unserer Erfahrung entdecken wir die spannendsten Winkel ohne einen Moment zu verpassen.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "Die Stimmung in der Disco oder das Ambiente der Mondlichtszene sind massgebend für den Erfolg Ihres Events. Für die Filmtechnik sind dies suboptimale Lichtverhältnisse. Jedoch zählt für uns die Atmosphäre mehr als jedes kleine Detail. Ohne künstlichen Perfektionismus und ohne unnötige Beleuchtung bieten wir Ihnen die naturgetreue Wiedergabe ihrer Veranstaltung.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Ob actiongeladener Werbespot oder schlichter Dokumentarfilm, unsere Erfahrung in zwei- und dreidimensionalen visuellen Effekten bereichert Ihre Produktion. Wenn es um den letzten Schliff Ihres Projekts geht, offerieren wir Ihnen gerne einen individuellen Soundtrack und beleben das Material mit einer wirksamen Farbkorrektur.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Wir sind mit einer modernen und vorteilhaft mobilen Technik ausgestattet. Auch sehr belebte Events oder landschaftlich entlegene Orte können wir erreichen. In der Community der Filmemachern sind wir gut vernetzt. Bei Bedarf und nach Absprache mit Ihnen nehmen wir weitere Spezialisten in Anspruch. Bei uns zählt, dass Sie am Ende die gewünschte Aufnahme erhalten."
	
	var projectColumn0Text = "Ob Werbespot, Konzert, Musikvideo oder anderes Event, wir freuen uns auf jede neue Herausforderung. Im Gespräch mit Ihnen notieren wir Rahmenbedingungen und Erwartungen. Daraus erstellen wir Ihr individuelles Angebot. Selbstverständlich wird die Umsetzung des Projektes in enger Zusammenarbeit mit Ihnen erfolgen. <br><br>Sehr gerne erwarten wir Ihre Anfrage per <span class='email'>E-Mail</span>!";
	var projectColumn1Text = "<br><br><table><tr><td>23.5.2012</td><td>blub</td></tr><tr><td>23.5.2012</td><td>blub</td></tr></table>";
	
	var aboutDWLeftText = "";
	var aboutDWRightText = "";
	
	var aboutFabianText = "Ob DV Camcorder oder moderne Kinokamera, Fabian hatte schon immer eine Vorliebe zum bewegten Bild. Seine Freizeit verbringt er in den Bergen auf der Suche nach stimmungsvollen neuen Orten.";
	var aboutPascalText = "Seitdem Pascal 2012 mit der Fotografie begonnen hat, versucht er, neue Wege zu finden, Bewegung in einem Bild festzuhalten. Er bringt immer gerne sein Können in der Informatik und Musik ein.";
	
	var language = (window.navigator.userLanguage || window.navigator.language).substr(0,2);
	
	if (language == "de"){
		switchToDE();
	}
	$("#langLinkDE").click(function(){
		switchToDE()
	});
	
	function switchToDE(){
		
		$(".titleSkills").html(titleSkills);
		$(".titleProject").html(titleProject);
		$(".titleAbout").html(titleAbout);
		$(".titlePebble").html(titlePebble);
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
		$("#aboutDWLeftText").html(aboutDWLeftText);
		$("#aboutDWRightText").html(aboutDWRightText);
		$("#aboutFabianText").html(aboutFabianText);
		$("#aboutPascalText").html(aboutPascalText);
	}
})