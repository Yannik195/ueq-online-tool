import image1 from "./images/image1-women.png";
import ConfirmationCSS from './confirmation.module.css';

export function Confirmation() {
    return (
        <div class={ConfirmationCSS.wrapper}>
            <header class="confirmation-page-header">
                <h1 class={ConfirmationCSS.h1}>Vielen Dank!</h1>
                <p class={ConfirmationCSS.p}>Dein ausgefülltes Formular wurde erfolgreich abgeschickt.</p>
            </header>
            <main class="confirmation-page-main">
                <img class={ConfirmationCSS.image1} src={image1} alt="womenpciture"/>
                <p class={ConfirmationCSS.text2}>Du möchtest auch UEQ Daten erheben und auswerten?</p>
                <p class={ConfirmationCSS.text3}>Erstelle jetzt kostenlose UEQ-Fragebögen und werte sie Online aus.</p>
                <div class={ConfirmationCSS.button1}>
                <button class={ConfirmationCSS.btn1}>UEQ erstellen</button>
                </div>
            </main>
            <div class={ConfirmationCSS.Footer}></div>
        </div>
  );
}