import image1 from "./images/image1-women.png";
export function Confirmation() {
    return (
        <div class="wrapper">
            <header class="page-header">
                <h1>Vielen Dank!</h1>
                <p>Dein ausgefülltes Formular wurde erfolgreich abgeschickt.</p>
            </header>
            <main class="page-main">
                <img class="image1" src={image1}/>
                <p class="text2">Du möchtest auch UEQ Daten erheben und auswerten?</p>
                <p class="text3">Erstelle jetzt kostenlose UEQ-Fragebögen und werte sie Online aus.</p>
                <div class="button1">
                <button class="btn1">UEQ erstellen</button>
                </div>
            </main>
            <div class="Footer"></div>
        </div>
  );
}