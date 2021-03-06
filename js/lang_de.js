$(function(){
	
	var titleSkills =     "Kompetenzen";
	var titleProject =    "Ihr Projekt";
	var titleAbout = "&nbsp;&Uuml;ber uns&nbsp;&nbsp;";
	var titlePebble = "Das Team";
	var titleRecent = "Letzte Projekte";
	
	var skillDynamicTitle = "Bewegte Aufnahmen";
	var skillDynamicText = "Keine Lust mehr auf feste Perspektiven von einem Stativ in der Ecke des Raums? Wir finden für jeden Clip eine neue Position. Übergänge ersetzen wir durch flüssige Kamerabewegungen. Damit wird die Wirkung des Geschehens noch verstärkt. Dank unserer Erfahrung entdecken wir die spannendsten Winkel ohne einen Moment zu verpassen.";
	
	var skillLowLightTitle = "Verf&uuml;gbares Licht";
	var skillLowLightText = "Die Stimmung in der Disco oder das Ambiente der Mondlichtszene sind massgebend für den Erfolg Ihres Events. Für die Filmtechnik sind dies suboptimale Lichtverhältnisse. Jedoch zählt für uns die Atmosphäre mehr als jedes kleine Detail. Ohne künstlichen Perfektionismus und ohne unnötige Beleuchtung bieten wir Ihnen die naturgetreue Wiedergabe ihrer Veranstaltung.";
	
	var skillAerialTitle = "Luftaufnahmen";
	var skillAerialText = "Mithilfe der neuesten Videodrohnen bringen wir Bewegung in Ihr Projekt. Durch den gezielten Einsatz und gute Ausführung in Ihrer Produktion erzeugen unsere Luftaufnahmen bleibende Eindrücke. Wir erweitern unser Arsenal stets mit neuester Technik und können diese nahtlos mit altbewährten Methoden kombinieren.";
	
	var skillEditingTitle = "Schnitt";
	var skillEditingText = "Ob actiongeladener Werbespot oder schlichter Dokumentarfilm, unsere Erfahrung in zwei- und dreidimensionalen visuellen Effekten bereichert Ihre Produktion. Wenn es um den letzten Schliff Ihres Projekts geht, offerieren wir Ihnen gerne einen individuellen Soundtrack und beleben das Material mit einer wirksamen Farbkorrektur.";
	
	var skillFlexibleTitle = "Flexibilit&auml;t";
	var skillFlexibleText = "Wir sind mit einer modernen und vorteilhaft mobilen Technik ausgestattet. Auch sehr belebte Events oder landschaftlich entlegene Orte können wir erreichen, wir sind in den Schweizer Bergen zu Hause. In der Community der Filmemachern sind wir gut vernetzt. Bei Bedarf und nach Absprache mit Ihnen nehmen wir weitere Spezialisten in Anspruch. Bei uns zählt, dass Sie am Ende die gewünschte Aufnahme erhalten."
	
	var projectText = "Ob Werbespot, Konzert, Musikvideo oder anderes Event, wir freuen uns auf jede neue Herausforderung. Unser Arbeitsprozess beginnt mit einem Gespräch mit Ihnen, wobei wir uns ihre Erwartungen und Rahmenbedingungen notieren. Daraus erstellen wir Ihr individuelles Angebot. Selbstverständlich wird die Umsetzung des Projektes in enger Zusammenarbeit mit Ihnen erfolgen. <br><br>Sehr gerne erwarten wir Ihre Anfrage per <span class='email'>E-Mail</span>!";
	
	var aboutDWLeftText = "Wir sind ein kleines Studio mit Sitz in <span itemprop=\"areaServed\">Bern</span> und <span itemprop=\"areaServed\">Zürich</span>. Filme zu drehen ist unsere Leidenschaft. Seit der Schulzeit arbeiten wir zusammen und verbessern uns stetig.";
	var aboutDWRightText = "Unser Arbeitsprozess ist einfach dennoch effizient, was es uns erlaubt, Projekte in einer relativ kurzen Zeit fertigzustellen.";
	var aboutDWList = "<table>" +
			"<tr><th class='firstTh'>2017</th></tr>" +
			"<tr><td>September</td><td class='centerTd'>Energy Air 2017</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=McKV05DNzYo' target='' id='McKV05DNzYo' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>September</td><td class='centerTd'>Promo 4coach</td></tr>" +
			"<tr><td>August</td><td class='centerTd'>Mittelaltermarkt Kiesen</td></tr>" +
			"<tr><td>Juni</td><td class='centerTd'>Mittelalterduell auf dem Berg</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=V-CZY7CNU24' target='' id='V-CZY7CNU24' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>Januar</td><td class='centerTd'>Eislaufen auf dem Oeschinensee</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=0o9kz2nUKug' target='' id='0o9kz2nUKug' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Anschauen</a></td></tr>" +
			"<tr><th>2016</th></tr>" +
			"<tr><td>November</td><td class='centerTd'>Seelandindoorcycling 2016</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=cyaQJswTQCM' target='' id='cyaQJswTQCM' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>November</td><td class='centerTd'>Musikvideo <q>Waves</q></td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=hzR74WpFa4Q' target='' id='hzR74WpFa4Q' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>Oktober</td><td class='centerTd'>Skye am Cybathlon 2016</td></tr>" + 
			"<tr><td>April</td><td class='centerTd'>Promo für Skye von Aerotainment Labs</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=DszwR1-fmLs' target='' id='DszwR1-fmLs' aspect='34.4%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>Februar</td><td class='centerTd'>Musikvideo <q>Fly</q> (4K)</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=NL3joKd7P-A' target='' id='NL3joKd7P-A' aspect='34.4%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Anschauen</a></td></tr>" +
			"<tr><th>2015</th></tr>" +
			"<tr><td>Dezember</td><td class='centerTd'>Kurzvideo für Aerotainment an der UZH</td></tr>" +
			"<tr><td>November</td><td class='centerTd'>Promo Seelandindoorcycling</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=RFJGh29AScw' target='' id='RFJGh29AScw' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Anschauen</a></td></tr>" +
			"<tr><td>September</td><td class='centerTd'>Mittelaltermarkt Kiesen</td><td><a class='aboutLink ytLink' href='https://www.youtube.com/watch?v=41R56juAyfA' target='' id='41R56juAyfA' aspect='45.0%'><img src='img/playIcon.svg' class='aboutPlay'/>&nbsp;Anschauen</a></td></tr>" +
			"</table>";
	
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
		$(".titleRecent").html(titleRecent);
		$("#skillDynamicTitle").html(skillDynamicTitle);
		$("#skillDynamicText").html(skillDynamicText);
		$("#skillLowLightTitle").html(skillLowLightTitle);
		$("#skillLowLightText").html(skillLowLightText);
		$("#skillAerialTitle").html(skillAerialTitle);
		$("#skillAerialText").html(skillAerialText);
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