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

# Tech

## Prototyping 

### Figma
Um unsere Vorstellungen von Design und Funktionalität festzuhalten, haben wir Figma verwendet.
Figma ist eine kollaborative Software zur Erstellung von Prototypen im Bereich UX oder UI Design. Es wird hauptsächlich als Webanwendung verwendet. Darüber hinaus läuft Figma auch als Desktop-Applikation für MacOS und Windows sowie als Mobile-Applikation für Android und iOS. Figma-Designs können modular aufgebaut und in Echtzeit mit anderen geteilt werden. Wir haben diese Software verwendet, um das Design des Projekts umzusetzen. Wir entwarfen einen Prototyp, der in die Webanwendung implementiert werden sollte. 

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
