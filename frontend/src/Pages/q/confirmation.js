import image1 from "./images/image1-women.png";
export function Confirmation() {
    return (
        <div class="wrapper">
            <header class="page-header">
                <h1>Vielen Dank!</h1>
                <p>Dein ausgefülltes Formular wurde erfolgreich abgeschickt.</p>
            </header>
            <main class="page-main">
                <img src={image1}/>
                <h2>Du möchtest auch UEQ Daten erheben und auswerten?</h2>
            </main>
        </div>
  );
}