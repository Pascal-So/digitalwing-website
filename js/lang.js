$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&nbsp;&Uuml;ber uns&nbsp;&nbsp;";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Keine Lust mehr auf feste Perspektiven von einem Stativ in der Ecke des Raums? Wir finden nicht nur f&uuml;r jede Aufnahme eine andere Position, sondern k&ouml;nnen auch fl&uuml;ssige Kamerabewegungen bieten. Damit wirkt die Action umso mehr. Dank unserer Erfahrung entdecken wir die spannendsten Winkel ohne einen Moment zu verpassen.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "Von Anfang mussten wir uns an schwache und anderweitig suboptimale Lichtverh&auml;ltnisse gew&ouml;hnen. Deswegen k&ouml;nnen wir jetzt die Stimmung in der Disko oder die Ambiente der Mondlichtszene realit&auml;tsgetreu reproduzieren - ganz ohne zus&auml;tzliches Licht. F&uuml;r uns z&auml;hlt Realismus mehr als jedes kleine Detail k&uuml;nstlich perfektioniert zu haben.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Ob actiongeladener Werbespot oder schlichter Dokumentarfilm, unsere Erfahrung in zwei- and dreidimensionalen visuellen Effekten bereichert Ihre Produktion. Wenn es um den letzten Schliff Ihres Projekts geht, besorgen wir Ihnen gerne einen individuellen Soundtrack und peppen das Material mit einer lebhaften Farbkorrektur auf.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Dank unserer leichten Ausr&uuml;stung k&ouml;nnen wir jeden Ort einfach erreichen. Unsere Verbindungen mit anderen Filmemachern erlauben es uns, jederzeit weitere Spezialisten in Anspruch zu nehmen. Bei uns z&aumlhlt nur, ob am Ende die gew&uuml;nschten Aufnahmen vorhanden sind."
	
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