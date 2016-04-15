$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&Uuml;ber uns&nbsp;&nbsp;&nbsp;";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Keine Lust mehr auf feste Perspektiven von einem Stativ in der Ecke des Raums? Wir finden nicht nur f&uuml;r jede Aufnahme eine andere Position, sondern k&ouml;nnen auch fl&uuml;ssige Kamerabewegungen bieten. Damit wirkt die Action umso mehr. Dank unserer Erfahrung entdecken wir die spannendsten Winkel ohne einen Moment zu verpassen.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "Von Anfang mussten wir uns an schwache und anderweitig suboptimale Lichtverh&auml;ltnisse gew&ouml;hnen. Deswegen k&ouml;nnen wir jetzt die Stimmung in der Disko oder die Ambiente der Mondlichtszene realit&auml;tsgetreu reproduzieren - ganz ohne zus&auml;tzliches Licht. F&uuml;r uns z&auml;hlt Realismus mehr als jedes kleine Detail k&uuml;nstlich perfektioniert zu haben.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Ob actiongeladener Werbespot oder schlichter Dokumentarfilm, unsere Erfahrung in zwei- and dreidimensionalen visuellen Effekten bereichert Ihre Produktion. Wenn es um den letzten Schliff Ihres Projekts geht, besorgen wir Ihnen gerne einen individuellen Soundtrack und peppen das Material mit einer lebhaften Farbkorrektur auf.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Dank unserer leichten Ausr&uuml;stung k&ouml;nnen wir jeden Ort einfach erreichen. Unsere Verbindungen mit anderen Filmemachern erlauben es uns, jederzeit weitere Spezialisten in Anspruch zu nehmen. Bei uns z&aumlhlt nur, ob am Ende die gew&uuml;nschten Aufnahmen vorhanden sind."
	
	var projectColumn0Text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.";
	var projectColumn1Text = "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ";
	
	var aboutFabianText = "Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen Pfannkuchen ";
	var aboutPascalText = "Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne Lasagne ";
	
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