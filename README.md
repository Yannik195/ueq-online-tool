https://www.hdm-stuttgart.de/stage/projekt_detail/projekt_details?projekt_ID=4020

https://ueq-online-tool.de

## Dependencies

- `cors`: This package is a middleware that enables Cross-Origin Resource Sharing (CORS) in the application. It allows the server to accept requests from a different domain than the one it is hosted on.
- `dotenv`: This package allows you to load environment variables from a `.env` file into `process.env`. This is useful for setting up different configurations for different environments (e.g. development and production).
- `express`: This package is a web framework for Node.js. It provides a simple and flexible way to create web applications and APIs.
- `mongoose`: This package is an Object Document Mapper (ODM) for MongoDB. It provides a model-based approach for working with data in a MongoDB database, making it easier to write validation logic, query the database, and handle errors.
- `nodemon`: This package is a development tool that automatically restarts the server when code changes are made. It saves you from having to manually restart the server every time you make a change.

# ueq

![Slide 1](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide1.svg?raw=true)
![Slide 2](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide2.svg?raw=true)
![Slide 3](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide3.svg?raw=true)

![App.js](https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/appjs.png?raw=true)

https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/appjs.png?raw=true

<img src="https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/appjs.png?raw=true" alt="Kitten" title="A cute kitten" width="40vw" height="100" />

## Description

ueq is a tool for creating and managing questionnaires.

## Technologies

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Frontend

The frontend is built using the following technologies:

- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [Axios](https://github.com/axios/axios): A library used for making HTTP requests from the frontend.
- [chart.js](https://www.chartjs.org/) and [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2): Libraries for creating and displaying charts in the app.
- [moment](https://momentjs.com/): A library for working with dates and times.
- [node-sass](https://github.com/sass/node-sass): A library that allows you to use SASS (a CSS preprocessor) in your frontend code.
- [react-hook-form](https://react-hook-form.com/): A library for creating and validating forms in the app.
- [react-router-dom](https://reactrouter.com/): A library for implementing routing in the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Code

```
//Route Middleware
app.use("/api/q", questionnaireRoutes)
app.use("/api/result", resultRoutes)
app.use("/api/export", exportRoutes)
```

# Projektbericht

## Pascal Palitzsch

Um eine gut gestaltete Benutzeroberfläche für unsere Anwendung umzusetzen und zu optimieren war es nötig häufig mit HTML und CSS zu arbeiten.
Im Laufe des Projekts habe ich mich auch mit React auseinandergesetzt. Anfangs hatte ich Schwierigkeiten, mich in diese neue Technologie einzuarbeiten. Aber mit der Zeit war das immer einfacher.

Während der Arbeit mit React habe ich sehr viel gelernt, insbesondere über die Funktionsweise, die Installation und Verwendung. Durch diese Erfahrung habe ich mein Wissen in diesem Bereich vertieft und bin sicherer im Umgang mit React geworden.

Ein weiterer wichtiger Teil des Projekts war die Einrichtung und Verwendung von Postmark, einem E-Mail-Service, der speziell für die Zustellung von E-Mails entwickelt wurde. Ich habe mich intensiv mit der Einrichtung des Services und der Verwendung der API auseinandergesetzt. Diese Erfahrung hat mir gezeigt, wie wichtig es ist, sich mit Tools und Diensten auseinanderzusetzen, um die Funktionalität der Anwendung zu erweitern und zu verbessern.

Während des Projekts gab es natürlich auch Herausforderungen und Probleme, die ich alleine nicht bewältigen konnte. Doch ich hatte immer Hilfe aus dem Team und konnte von den Erfahrungen und Kenntnissen meiner Kommilitonen profitieren.

Insgesamt war das Projekt eine wertvolle Erfahrung für mich, da ich nicht nur meine Fähigkeiten in HTML und CSS verbessert habe, sondern auch neue Technologien wie React und Postmark kennengelernt habe. Die Zusammenarbeit mit dem Team war sehr produktiv und ich bin dankbar für die Unterstützung, die ich erhalten habe.

# Tech

## Frameworks

### React.js

ReactJS ist ein JavaScript-Framework, das von Facebook entwickelt wurde. Es bietet eine moderne, komponentenbasierte Ansatz zur Entwicklung von Benutzeroberflächen. Im Gegensatz zu herkömmlicher Entwicklung, bei der sich die gesamte Seite neu laden muss, wenn eine Änderung vorgenommen wird, ermöglicht ReactJS eine schnellere und reaktionsschnellere Anwendung durch den Einsatz von virtuellen DOMs. Daher ist es besonders geeignet für Anwendungen, die eine hohe Interaktivität und Benutzerfreundlichkeit erfordern.

### Node.js / Express.js

Node.js ist eine Open-Source, serverseitige JavaScript-Laufzeitumgebung. Es ermöglicht es Entwicklern, JavaScript-Code auf einem Server auszuführen, anstatt ihn im Browser auszuführen. Express.js ist ein Framework für Node.js, das es Entwicklern erleichtert, einen HTTP-Server zu erstellen und zu verwalten.

Mit Express.js kann man einen HTTP-Server erstellen, indem man einfach eine Anwendung mit nur wenigen Zeilen Code initialisiert. Die Anwendung kann dann eingerichtet werden, um Anforderungen von Clients wie Web-Browsern oder mobilen Geräten zu empfangen und auf sie zu reagieren, indem sie Daten an sie sendet oder auf bestimmte Weise mit ihnen interagiert.

### MongoDB / Mongoose

MongoDB ist eine NoSQL-Datenbank, die ein alternatives Datenmodell als SQL-Datenbanken bietet. Im Gegensatz zu SQL-Datenbanken, die Daten in Tabellen mit definierten Spalten speichern, nutzt MongoDB ein Dokumentenmodell, bei dem Daten als Dokumente in einer Collection gespeichert werden. Dieses Modell bietet Flexibilität und Skalierbarkeit für Anwendungen, die sich schnell ändernden Daten anpassen müssen.

Wenn eine Node.js-Anwendung mit MongoDB verbunden werden soll, wird häufig das Mongoose-Modul genutzt. Mongoose ist ein ODM (Object Data Mapping) für MongoDB, das es  ermöglicht, die Daten als objektorientierte Modelle in der Anwendung zu verwalten, anstatt mit den Rohdaten in der Datenbank zu arbeiten. Mongoose erleichtert das Arbeiten mit MongoDB und bietet zusätzliche Funktionalitäten wie Validation und Middleware.

# Funktionen

## Excel Export

Der Excel-Export-Feature in der Anwendung ermöglicht es den Benutzern, ihre erhobenen UEQ-Daten effizient und präzise in ein offizielles Excel-Dokument zu exportieren. Diese Funktionalität wird durch die Verwendung der excel.js Node-Bibliothek auf dem Server implementiert und ermöglicht es den Benutzern, die Auswertung direkt im offiziellen Excel-Dokument durchzuführen.

### Implementierung

## Evaluation

Mit unserer Anwendung ist es möglich, die Auswertung von UEQ durchzuführen. Die Implementierung ermöglicht es, die wichtigsten Evaluierungen direkt in der Web-App durchzuführen. Dies wird durch die Verwendung der Chart.js Node Library realisiert.

## Link

Um den Fragebogen an Probanden zu verteilen, kann die URL genutzt werden. Die URL enthält einen Universally Unique Identifier (UUID), welcher den UEQ eindeutig identifiziert. Das Verwenden einer UUID bietet eine zusätzliche Sicherheit, da es eine eindeutige und unveränderliche Referenz darstellt und somit Missbrauch oder Zugriff durch unbefugte Personen verhindert werden kann.

### UUID

Ein Universally Unique Identifier (UUID) ist ein eindeutiger Bezeichner für ein digitales Objekt. In unserem Projekt nutzen wir die uuid NPM Library, um die UUIDs für die Verteilung des UEQ Fragebogens zu generieren. Ein Beispiel einer UUID kann sein: 51e88379-f42f-4844-a392-ad0b35aac5bf. In unserem Projekt nutzen wir das Schema Produktname-UUID, zum Beispiel Recycled-Rubber-Chips-51e88379-f42f-4844-a392-ad0b35aac5bf. 

## UEQ Items Sprache ändern

Die Funktionalität, die Items des UEQ in einer anderen Sprache anzupassen, ist ein wichtiger Aspekt, um den UEQ möglichst vielen Menschen zugänglich zu machen. Dies wurde durch die Verwendung von React und seinem State Management Hook ermöglicht. Um diese Funktionalität bereitzustellen, wurde ein benutzerdefinierter Hook mit dem Namen "useLanguage" erstellt. Mit diesem Hook ist es möglich, die Sprache des UEQ dynamisch zu ändern

## E-Mail Service Postmark

Postmark ist ein cloudbasierter E-Mail-Service. Der Service ist auf die Zustellung von E-Mails, wie z.B. Bestätigungs-E-Mails, Benachrichtigungen und Updates, spezialisiert und gewährleistet eine zuverlässige und schnelle Zustellung dieser E-Mails.

Postmark bietet eine benutzerfreundliche Oberfläche sowie eine REST-API, die es Entwicklern ermöglicht, nahtlosen Zugang zum Service zu erhalten und den Versand von E-Mails in ihre Anwendungen zu integrieren. Der Service umfasst auch eine Reihe von Tools, die es Benutzern ermöglichen, den Erfolg ihrer E-Mail-Kampagnen zu verfolgen und zu optimieren.

Zu den Funktionen von Postmark gehören unter anderem eine hohe Zustellbarkeit von E-Mails, die automatische Entfernung von ungültigen E-Mail-Adressen aus Mailinglisten, die Möglichkeit, personalisierte E-Mails zu versenden, sowie ein umfassendes Dashboard, das Einblicke in die Performance der E-Mail-Kampagnen liefert. Darüber hinaus bietet Postmark auch eine umfassende API-Dokumentation und einen hervorragenden Kundenservice, der Benutzern bei Fragen oder Problemen zur Verfügung steht.

# Wofür verwenden wir Postmark?

Wir verwenden Postmark um dem Benutzer den generierten Link per E-Mail zu senden und somit zu verhindern, dass ein angelegter UEQ-Fragebogen nicht mehr wiedergefunden werden kann.

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

# E-Mail für den Benutzer:
<img src="https://github.com/Yannik195/ueq-online-tool/blob/main/snaps/snaps/Postmark Email.PNG?raw=true" alt="EMail" title="EMail Benutzer" width="60vw" height="100" />
