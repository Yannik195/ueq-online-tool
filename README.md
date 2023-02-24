https://www.hdm-stuttgart.de/stage/projekt_detail/projekt_details?projekt_ID=4020

https://ueq-online-tool.de

# Projektbericht

# Einleitung

Der folgende Projektbericht beschreibt die Entwicklung einer Webanwendung zur Erfassung und Auswertung von Ergebnissen des Usability Engineering Questionnaire (UEQ). Im Rahmen eines Softwareprojekts während unseres Studiums haben wir uns mit modernen Webtechnologien wie React.js und Node.js auseinandergesetzt, um eine effiziente und benutzerfreundliche Anwendung zu entwickeln. Ziel des Projekts war es, die manuelle Auswertung von UEQ-Ergebnissen zu vereinfachen und die Datenerfassung zu optimieren. Im Bericht werden die technischen Aspekte der Entwicklung, die wichtigsten Funktionen der Anwendung sowie der Entwicklungsprozess und die Herausforderungen, die wir im Verlauf des Projekts gemeistert haben, detailliert beschrieben.

# Ablauf

## Kick-Off

Zu Beginn des Projekts haben wir einige Wochen lang samstags Kick-off-Events abgehalten, um das gesamte Team auf den gleichen Stand zu bringen und das Projekt zu planen. Im Fokus der technischen Aspekte lag es, sicherzustellen, dass alle Teammitglieder mit den notwendigen Technologien vertraut sind. Dazu zählten React, HTML, CSS, MongoDB und Node. Während dieser Kick-off-Events haben wir uns Zeit genommen, um das Projekt und seine Anforderungen im Detail zu besprechen und um sicherzustellen, dass alle Teammitglieder ein gemeinsames Verständnis für die Ziele und die Arbeitsweise des Projekts haben.

## Meetings

Für unsere Meetings haben wir uns regelmäßig per WhatsApp verabredet und versucht, uns möglichst wöchentlich zu treffen. Zur Durchführung der Meetings haben wir Discord genutzt, eine VoIP- und Chat-Plattform, die es uns ermöglicht hat, uns in Echtzeit zu unterhalten und gleichzeitig die Bildschirme der anderen Teammitglieder zu sehen.

## Pull Requests

Während der Arbeit an unserem Projekt haben wir Pull Requests als eine wichtige Methode genutzt, um unsere Arbeit zusammenzuführen und effektiv zu verwalten. Wir haben das Issues-Feature von GitHub genutzt, um für unsere Trello-Aufgaben einen neuen Branch zu erstellen, und dann haben wir featurebasiert daran gearbeitet. Sobald wir fertig waren, haben wir einen Pull Request erstellt und den Code gemeinsam überprüft, bevor wir ihn in den Main-Branch zusammengeführt haben.

Das Arbeiten mit Pull Requests hat uns viele Vorteile gebracht. Es hat uns zum Beispiel die Möglichkeit gegeben, unsere Arbeit effektiv zu organisieren, indem wir klare Strukturen für unsere Entwicklungsarbeiten schaffen konnten. Außerdem hat es uns ermöglicht, unsere Arbeit systematisch zu überprüfen und zu verbessern, indem wir gemeinsam Code-Reviews durchgeführt haben. Darüber hinaus hat es uns auch geholfen, die Transparenz unserer Arbeit zu erhöhen und die Zusammenarbeit im Team zu fördern.

## Trello

Trello ist ein webbasiertes Tool zur Verwaltung von Projekten und Aufgaben, das uns während der Arbeit an unserem Projekt sehr geholfen hat. Wir haben Trello genutzt, um Aufgaben zu erstellen und zu verwalten, und um den Fortschritt unserer Arbeit zu verfolgen. In den einzelnen Trello-Tasks haben wir die Aufgaben genau beschrieben und geplant, welche Arbeitsschritte notwendig sind, um das Ziel zu erreichen. Die Aufgaben waren zudem mit den zugehörigen Teammitgliedern verknüpft.

Während unserer wöchentlichen Meetings haben wir immer zuerst auf Trello geschaut, um sicherzustellen, dass wir alle auf dem gleichen Stand sind. Jeder hat zu seiner aktuellen Aufgabe etwas gesagt und wir haben uns über den Fortschritt und die nächsten Schritte ausgetauscht. Das hat uns geholfen, effektiver und fokussierter zu arbeiten und sicherzustellen, dass jeder im Team über den Fortschritt und die Herausforderungen auf dem Laufenden bleibt. Insgesamt hat uns Trello eine klare und strukturierte Methode zur Organisation unserer Arbeit bereitgestellt, was uns dabei geholfen hat, effektiver zu arbeiten und unser Projekt erfolgreich abzuschließen.

## Martin Schrepp

Zu Beginn unseres Projekts haben wir uns in einem Video-Call mit Dr. Martin Schrepp getroffen, der der Ersteller des UEQ ist und bei SAP arbeitet. In diesem Gespräch haben wir das Projekt und die Herausforderungen besprochen und wertvolle Tipps und Informationen von ihm bekommen. Dr. Schrepp hat uns dabei geholfen, das UEQ besser zu verstehen und unsere Ideen für das Projekt zu konkretisieren. Sein tiefes Verständnis für das UX-Design und seine Erfahrung im Bereich der Usability-Forschung haben uns dabei geholfen, unser Projekt auf das nächste Level zu bringen. Wir sind sehr dankbar für seine wertvollen Beiträge und die Zeit, die er für uns genommen hat. Seine Unterstützung hat dazu beigetragen, dass wir unser Ziel erreicht haben und eine erfolgreiche UEQ-Webanwendung erstellt haben.

# Seiten

## Landingpage

Eine Landingpage ist oft die erste Anlaufstelle für Besucher, die an einem Produkt oder einer Dienstleistung interessiert sind. Die Seite ist so gestaltet, dass sie schnell und prägnant die wichtigsten Informationen zum Angebot vermittelt und den Besucher zum Handeln anregt. Dabei wird eine Landingpage auf ein bestimmtes Ziel ausgerichtet, wie beispielsweise die Generierung von Leads oder der Verkauf von Produkten.

Die Landingpage unseres Projekts besteht aus drei Abschnitten. In der Hero Section werden die wichtigsten Informationen über das Online-Tool dargestellt, einschließlich des Zwecks, der Funktionalitäten und wie es verwendet werden kann. Die FAQ Section gibt Antworten auf häufig gestellte Fragen und ermöglicht es den Besuchern, schnell und einfach Antworten zu finden. In der Team Section stellen wir das Team vor, das hinter dem Projekt steht, und zeigen den Besuchern, wer an der Entwicklung des Online-Tools beteiligt war.

## Create new Questionnaire

Die "Create new questionnaire" Seite dient dazu, einen neuen Fragebogen zu erstellen. Dabei wurde besonderes Augenmerk auf eine einfache und intuitive Bedienung gelegt, um den Erstellungsprozess so angenehm wie möglich zu gestalten. Die Seite besteht aus verschiedenen HTML-Input-Feldern, die mithilfe der React Hook Form Library an das React State Management angebunden sind. Die eingegebenen Daten können anschließend über die HTTP-Library Axios an das Backend gesendet werden.

Um die Erstellung von neuen UEQs zu beschleunigen, haben wir eine Funktion implementiert, die es ermöglicht, die Felder mit Dummy-Daten auszufüllen. Diese Option war besonders hilfreich während der Entwicklungsphase, da so schnell neue UEQs angelegt werden konnten, ohne die Felder manuell ausfüllen zu müssen.

Zusätzlich kann der Nutzer auf der Seite auswählen, ob er die lange oder kurze Version des UEQs nutzen möchte und welche demografischen Daten er beim Ausfüllen erheben möchte. Diese Funktionalitäten sind aktuell noch nicht implementiert, aber können in Zukunft als Erweiterungen der Anwendung betrachtet werden.

## UEQ Ausfüllen

Die "Fragebogen ausfüllen" Seite dient hauptsächlich dem Zweck, die 26 bipolaren Items des UEQ auszufüllen. Dazu wurden HTML Input Fields genutzt, welche mit der JavaScript Map Funktion in React JSX für die einzelnen Item Paare erstellt wurden. Die User können ihre Bewertung durch Klicken auf eine Skala von 1 bis 7 ausdrücken. Zusätzlich können sie demographische Daten angeben, wie Alter, Geschlecht oder Beruf. Die Demographie-Daten können im Anschluss bei der Auswertung zur Segmentierung und Analyse der Ergebnisse genutzt werden.

Darüber hinaus gibt es auf der Seite die Funktion, den Namen des Produkts, für das der UEQ genutzt wird, zu ändern. Hierfür wurde ein Popup-Fenster entwickelt, welches erscheint, wenn der Nutzer den Namen des Produkts ändern möchte. 

Schließlich gibt es auf der Seite auch die Möglichkeit, die Sprache der Items zu ändern. Die Auswahl der Sprache ist wichtig, um den UEQ für möglichst viele Menschen verfügbar zu machen. Dafür wurde ein Drop-Down-Menü implementiert, welches dem Nutzer die Auswahl zwischen verschiedenen Sprachen bietet. Die gewählte Sprache wird dann in Echtzeit auf der Seite angezeigt.

## Evaluation

Die "Evaluation"-Seite ermöglicht es den Nutzern, einen Teil der Ergebnisse des durchgeführten UEQs einzusehen. Dabei werden die Ergebnisse in verschiedenen Diagrammen dargestellt, die mithilfe der Chart.js Node-Library generiert wurden. Die Diagramme stellen die gemessenen Werte in Bezug auf die verschiedenen Attribute des UEQs dar. Dabei können Nutzer beispielsweise die Verteilung der positiven und negativen Bewertungen betrachten. Es ist jedoch zu beachten, dass nur ein begrenzter Teil der Evaluationsergebnisse auf der Seite einsehbar ist. Um eine umfassendere Auswertung durchzuführen, kann das offizielle Excel-File des UEQs genutzt werden, das von den Entwicklern des UEQs bereitgestellt wird.

## Confirmation

Die Confirmation Seite dient dazu, dem Nutzer, der ein UEQ Formular ausgefüllt und abgeschickt hat, eine Rückmeldung zu geben, dass die Abgabe erfolgreich war. Zudem wird die Möglichkeit gegeben, dass man mit einem Klick selbst eine UEQ-Umfrage erstellen kann.

# Tech

## Figma

Figma ist ein browserbasiertes Design- und Prototyping-Tool, das es Designern ermöglicht, benutzerzentrierte digitale Designs zu erstellen, zu bearbeiten, zu teilen und zu präsentieren. Das Besondere an Figma ist, dass es eine kollaborative Plattform ist, auf der mehrere Designer in Echtzeit an einem Designprojekt arbeiten und Änderungen gleichzeitig sehen können. Das heißt Figma ein leistungsstarkes und benutzerfreundliches Tool für die Gestaltung digitaler Produkte, das die Zusammenarbeit zwischen Teammitgliedern erleichtert und den Designprozess beschleunigt.

## CSS / HTML

CSS und HTML waren wichtige Bestandteile der Entwicklung unseres Designs. Es ermöglichte uns, das Aussehen und das Layout der Webseite zu definieren und zu gestalten, um eine ansprechende und benutzerfreundliche Benutzeroberfläche zu schaffen.

## React.js

ReactJS ist ein JavaScript-Framework, das von Facebook entwickelt wurde. Es bietet eine moderne, komponentenbasierte Ansatz zur Entwicklung von Benutzeroberflächen. Im Gegensatz zu herkömmlicher Entwicklung, bei der sich die gesamte Seite neu laden muss, wenn eine Änderung vorgenommen wird, ermöglicht ReactJS eine schnellere und reaktionsschnellere Anwendung durch den Einsatz von virtuellen DOMs. Daher ist es besonders geeignet für Anwendungen, die eine hohe Interaktivität und Benutzerfreundlichkeit erfordern.****

## Node.js

Node.js ist eine Open-Source, serverseitige JavaScript-Laufzeitumgebung. Es ermöglicht es Entwicklern, JavaScript-Code auf einem Server auszuführen, anstatt ihn im Browser auszuführen. Express.js ist ein Framework für Node.js, das es Entwicklern erleichtert, einen HTTP-Server zu erstellen und zu verwalten.

## Express.js

Mit Express.js kann man einen HTTP-Server erstellen, indem man einfach eine Anwendung mit nur wenigen Zeilen Code initialisiert. Die Anwendung kann dann eingerichtet werden, um Anforderungen von Clients wie Web-Browsern oder mobilen Geräten zu empfangen und auf sie zu reagieren, indem sie Daten an sie sendet oder auf bestimmte Weise mit ihnen interagiert.

## Monogo DB / Mongoose

MongoDB ist eine NoSQL-Datenbank, die ein alternatives Datenmodell als SQL-Datenbanken bietet. Im Gegensatz zu SQL-Datenbanken, die Daten in Tabellen mit definierten Spalten speichern, nutzt MongoDB ein Dokumentenmodell, bei dem Daten als Dokumente in einer Collection gespeichert werden. Dieses Modell bietet Flexibilität und Skalierbarkeit für Anwendungen, die sich schnell ändernden Daten anpassen müssen.

Wenn eine Node.js-Anwendung mit MongoDB verbunden werden soll, wird häufig das Mongoose-Modul genutzt. Mongoose ist ein ODM (Object Data Mapping) für MongoDB, das es ermöglicht, die Daten als objektorientierte Modelle in der Anwendung zu verwalten, anstatt mit den Rohdaten in der Datenbank zu arbeiten. Mongoose erleichtert das Arbeiten mit MongoDB und bietet zusätzliche Funktionalitäten wie Validation und Middleware.

## Chart.js

Chart.js ist eine JavaScript-Bibliothek zur Erstellung von interaktiven, reaktionsfähigen und animierten Diagrammen, die in Webanwendungen verwendet werden können. Mit Chart.js können Entwickler verschiedene Arten von Diagrammen erstellen, z. B. Liniendiagramme, Tortendiagramme und Polardiagramme.

Die Bibliothek bietet viele Anpassungsmöglichkeiten, wie das Ändern von Farben, Schriftarten, Achsenbeschriftungen und Legenden. Chart.js unterstützt auch Interaktivität, wie z. B. Tooltips, wenn der Mauszeiger über Diagrammpunkte bewegt wird, Zoomfunktionen und Klickereignisse.

### Age Chart

Auf der Seite „fill“ können die Nutzer neben dem Fragebogen auch ihr Alter eingeben. Um das Alter aller Probanden zu analysieren, haben wir ein Tortendiagramm erstellt, das alle Altersgruppen zwischen "unter 18" und "über 60" gruppiert.

# Funktionen

## Excel Export

Der Excel-Export-Feature in der Anwendung ermöglicht es den Benutzern, ihre erhobenen UEQ-Daten effizient und präzise in ein offizielles Excel-Dokument zu exportieren. Diese Funktionalität wird durch die Verwendung der excel.js Node-Bibliothek auf dem Server implementiert und ermöglicht es den Benutzern, die Auswertung direkt im offiziellen Excel-Dokument durchzuführen.****

## Evaluation

Mit unserer Anwendung ist es möglich, die Auswertung von UEQ durchzuführen. Die Implementierung ermöglicht es, die wichtigsten Evaluierungen direkt in der Web-App durchzuführen. Dies wird durch die Verwendung der Chart.js Node Library realisiert.****

## Link

Um den Fragebogen an Probanden zu verteilen, kann die URL genutzt werden. Die URL enthält einen Universally Unique Identifier (UUID), welcher den UEQ eindeutig identifiziert. Das Verwenden einer UUID bietet eine zusätzliche Sicherheit, da es eine eindeutige und unveränderliche Referenz darstellt und somit Missbrauch oder Zugriff durch unbefugte Personen verhindert werden kann.****

## UUID

Ein Universally Unique Identifier (UUID) ist ein eindeutiger Bezeichner für ein digitales Objekt. In unserem Projekt nutzen wir die uuid NPM Library, um die UUIDs für die Verteilung des UEQ Fragebogens zu generieren. Ein Beispiel einer UUID kann sein: 51e88379-f42f-4844-a392-ad0b35aac5bf. In unserem Projekt nutzen wir das Schema Produktname-UUID, zum Beispiel Recycled-Rubber-Chips-51e88379-f42f-4844-a392-ad0b35aac5bf.****

## UEQ Items Sprache ändern

Die Funktionalität, die Items des UEQ in einer anderen Sprache anzupassen, ist ein wichtiger Aspekt, um den UEQ möglichst vielen Menschen zugänglich zu machen. Dies wurde durch die Verwendung von React und seinem State Management Hook ermöglicht. Um diese Funktionalität bereitzustellen, wurde ein benutzerdefinierter Hook mit dem Namen "useLanguage" erstellt. Mit diesem Hook ist es möglich, die Sprache des UEQ dynamisch zu ändern****

## E-Mail Service Postmark

Postmark ist ein cloudbasierter E-Mail-Service. Der Service ist auf die Zustellung von E-Mails, wie z.B. Bestätigungs-E-Mails, Benachrichtigungen und Updates, spezialisiert und gewährleistet eine zuverlässige und schnelle Zustellung dieser E-Mails.

Postmark bietet eine benutzerfreundliche Oberfläche sowie eine REST-API, die es Entwicklern ermöglicht, nahtlosen Zugang zum Service zu erhalten und den Versand von E-Mails in ihre Anwendungen zu integrieren. Der Service umfasst auch eine Reihe von Tools, die es Benutzern ermöglichen, den Erfolg ihrer E-Mail-Kampagnen zu verfolgen und zu optimieren.

Zu den Funktionen von Postmark gehören unter anderem eine hohe Zustellbarkeit von E-Mails, die automatische Entfernung von ungültigen E-Mail-Adressen aus Mailinglisten, die Möglichkeit, personalisierte E-Mails zu versenden, sowie ein umfassendes Dashboard, das Einblicke in die Performance der E-Mail-Kampagnen liefert. Darüber hinaus bietet Postmark auch eine umfassende API-Dokumentation und einen hervorragenden Kundenservice, der Benutzern bei Fragen oder Problemen zur Verfügung steht.

### Wofür verwenden wir Postmark?

Wir verwenden Postmark, um dem Benutzer den generierten Link per E-Mail zu senden und somit zu verhindern, dass ein angelegter UEQ-Fragebogen nicht mehr wiedergefunden werden kann.

Unser Template für den E-Mail Service sieht dabei wie folgt aus:

```html
<h1>Hallo, Test!</h1>
<p>Danke das sie einen UEQ Test erstellt haben.</p>
<!-- Action -->
<p>Hier finden sie ihren Zugang zu ihrer erstellen Umfrage:</p>
<table class="attributes" width="100%" cellpadding="0" cellspacing="0">
  <tr>
	<td class="attributes_content">
  	<table width="100%" cellpadding="0" cellspacing="0">
    	<tr>
      	<td class="attributes_item"><strong>Link:</strong> {{link_url}}</td>
    	</tr>
  	</table>
	</td>
  </tr>
</table>
<p>Danke,
  <br>ihr UEQ Team der Hochschule der Medien.</p>
```

### Die E-Mail die der Ersteller empfängt sieht wie folgt aus:

<img src="[https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/Postmark Email.PNG?raw=true](https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/Postmark%20Email.PNG?raw=true)" alt="EMail" title="EMail Benutzer" />

### Infobanner

Die Idee des Infobanners war es, ihn an mehreren Stellen zu platzieren, falls der eingeloggte Benutzer einen Tipp benötigt.
Wenn dies nicht der Fall ist, kann der Nutzer das Infobanner dauerhaft entfernen, indem er auf „don’t show hint“ klickt.

Durch die Verwendung des local Storage kann die Aktion des Benutzers dauerhaft gespeichert werden.

### Popup

Um den Nutzern die Möglichkeit zu geben, den Namen ihres Produkts zu ändern, haben wir ein Pop-up-Fenster erstellt, das genau das ermöglicht.
Da aber der Link auf der Webseite vom Namen abhängt, mussten wir ein Update im Backend implementieren, damit der Link nun den neuen Namen enthält.
Nach der Registrierung wird die Seite automatisch aktualisiert und enthält den neuen Namen sowie den neuen Link zu dieser Website.

# Persönliche Erfahrungen

## Pascal

Um eine gut gestaltete Benutzeroberfläche für unsere Anwendung umzusetzen und zu optimieren, war es häufig nötig, mit HTML und CSS zu arbeiten. Im Laufe des Projekts habe ich mich auch mit React auseinandergesetzt. Anfangs hatte ich Schwierigkeiten, mich in diese neue Technologie einzuarbeiten. Aber mit der Zeit war das immer einfacher.

Während der Arbeit mit React habe ich sehr viel gelernt, insbesondere über die Funktionsweise, die Installation und Verwendung. Durch diese Erfahrung habe ich mein Wissen in diesem Bereich vertieft und bin sicherer im Umgang mit React geworden.

Ein weiterer wichtiger Teil des Projekts war die Einrichtung und Verwendung von Postmark, einem E-Mail-Service, der speziell für die Zustellung von E-Mails entwickelt wurde. Ich habe mich intensiv mit der Einrichtung des Services und der Verwendung der API auseinandergesetzt. Diese Erfahrung hat mir gezeigt, wie wichtig es ist, sich mit Tools und Diensten auseinanderzusetzen, um die Funktionalität der Anwendung zu erweitern und zu verbessern.

Während des Projekts gab es natürlich auch Herausforderungen und Probleme, die ich alleine nicht bewältigen konnte. Doch ich hatte immer Hilfe aus dem Team und konnte von den Erfahrungen und Kenntnissen meiner Kommilitonen profitieren.

Insgesamt war das Projekt eine wertvolle Erfahrung für mich, da ich nicht nur meine Fähigkeiten in HTML und CSS verbessert habe, sondern auch neue Technologien wie React und Postmark kennengelernt habe. Die Zusammenarbeit mit dem Team war sehr produktiv und ich bin dankbar für die Unterstützung, die ich erhalten habe.

## Liljana

Da ich vor Beginn des Anwendungsprojekts keine Erfahrung mit React hatte und somit ein absoluter Anfänger war, fiel es mir anfangs sehr schwer, mich mit dem Projekt anzufreunden. Doch im Laufe des Projekts und nach einigen Tutorials im Internet konnte ich mich nach und nach mit dem Framework anfreunden. In der Zwischenzeit wurde mein Umgang mit React immer sicherer, so dass ich mich für meine Praktika bei Stellen bewarb, die mit React arbeiten.

Natürlich traten im Laufe des Projekts immer mal wieder Probleme auf, die zu Streitigkeiten oder Missverständnissen führten, aber wir konnten sie dank eingehender Diskussionen im Team schnell lösen. Selbst wenn es Probleme im Code gab, wurde dank der Teamarbeit schnell eine Lösung gefunden.

Durch das Moduls "Usability Engineering Project" konnte ich mein Wissen auch gleich in die Praxis umsetzen. Da ich im Rahmen des Moduls mit meiner Gruppe eigene Benutzertests durchführen musste, konnten wir unser Projekt sofort testen und auf Fehler überprüfen. Bei der Auswertung, die wir als Excel-Datei zum Download zur Verfügung gestellt haben, haben wir einen Fehler in den Items entdeckt, den wir sofort korrigiert haben.

Zusammenfassend kann ich sagen, dass mir das Projekt in vielerlei Hinsicht geholfen hat, einen sicheren Umgang mit React, HTML und CSS zu haben und mich darin während meines Studiums und auch in der Arbeitswelt zu entwickeln.

## Phuc

Als wir uns entschieden haben React für unsere Webanwendung zu nutzen, war ich anfangs ziemlich überfordert. Es schien so kompliziert und schwer zu verstehen zu sein, da ich noch keine Berührpunkte im Studium hatte. Aber nachdem ich mich in die Materie eingelesen hatte, bekam ich eine bessere Vorstellung wie es funktioniert. Ich begann damit, mich mit der Dokumentation von React.js auseinanderzusetzen und eine grundlegende Einführung in die Konzepte zu erhalten. Dann begann ich mit dem Aufbau einfacher Anwendungen, die in Tutorien auf der Website [https://reactjs.org/](https://reactjs.org/) zu finden sind. 

Während des Projektes hatte Schwierigkeiten mit Aufgaben und Aufgabenstellung an sich, wo mich mein Team tatkräftig unterstützen und mir Ansätze geben konnte, wie ich was zu erledigen soll.

Ein weiterer Vorteil von React.js war, dass es eine große und aktive Community gibt. Ich konnte problemlos nach Antworten auf Fragen suchen und fand zahlreiche Ressourcen, die mir halfen, mein Verständnis zu vertiefen und meine Fähigkeiten zu verbessern.

Alles in allem war meine Erfahrung mit React positiv. Obwohl es am Anfang etwas überwältigend war, dank der Unterstützung meiner Teammitglieder hab ich viel gelernt. 

## Yannik

Während des Projekts konnte ich meine Kenntnisse in verschiedenen technischen Aspekten der Webentwicklung, insbesondere React und Node.js, erweitern und diese in der Praxis anwenden. Zudem konnte ich meine Erfahrung im Projektmanagement nutzen, um agile Elemente in das Projekt einzuführen. Ich war maßgeblich an der Planung und Umsetzung des Projekts beteiligt, indem ich das Projekt aufgesetzt und das Team bei der Entwicklung unterstützt habe. Die Organisation von Meetings sowie die Koordinierung der Trello-Tasks fielen ebenfalls in meinen Aufgabenbereich als Product Owner. Ich konnte auch meine Erfahrung im Bereich Design einbringen, indem ich beim Erstellen des Figma-Prototyps half.

Als Teil des Entwicklerteams habe ich auch aktiv an der Code-Entwicklung und den Code-Reviews teilgenommen. Dabei konnte ich nicht nur meine technischen Fähigkeiten erweitern, sondern auch meine Teammitglieder bei der Entwicklung unterstützen. Insgesamt habe ich im Verlauf des Projekts wertvolle Erfahrungen im Management und in der Zusammenarbeit mit einem Team sammeln können.

Dieses Projekt hat mir nicht nur ermöglicht, meine Fähigkeiten in der Webentwicklung und im Projektmanagement zu verbessern, sondern auch meine Leidenschaft für diese Bereiche weiter zu entfachen. Ich bin sehr stolz darauf, Teil dieses erfolgreichen Projekts zu sein und freue mich darauf, meine Fähigkeiten und Erfahrungen in zukünftigen Projekten weiter auszubauen.

# Zukunft

Insgesamt können wir mit Stolz sagen, dass wir das Projekt erfolgreich gemeistert haben. Unser Team hat hart daran gearbeitet, eine funktionsfähige und benutzerfreundliche Webanwendung zur Erfassung und Auswertung von UEQ-Ergebnissen zu erstellen. Wir haben alle Herausforderungen gemeistert und uns kontinuierlich weiterentwickelt, um die bestmögliche Lösung zu bieten.

Wir haben auch noch ein weiteres Meeting mit Herrn Schrepp geplant, um uns über die Ergebnisse des Projekts auszutauschen und sein Feedback zu hören.

Während der Entwicklung der Webanwendung haben wir uns auf die wichtigsten Funktionen des UEQ konzentriert und uns bemüht, eine intuitive Benutzeroberfläche bereitzustellen. Einige zusätzliche Funktionen, wie Passwort Protection der Resultate, Design-Anpassungen und die Verwaltung von UEQs mit einem Account, wären darüber hinausgegangen und haben den Scope des Projekts überschritten. Wir sind jedoch zuversichtlich, dass unsere Anwendung auch ohne diese Funktionen den Bedürfnissen der Nutzer gerecht wird und ihnen eine wertvolle Unterstützung bei der Durchführung von UEQs bietet.

## Media Night Presentation Slides
![Slide 1](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide1.svg?raw=true)
![Slide 2](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide2.svg?raw=true)
![Slide 3](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide3.svg?raw=true)
