import image1 from "./images/image1-women.png";
import styles from './confirmation.module.css';
import { useNavigate } from "react-router-dom";


export function Confirmation() {
    let navigate = useNavigate();
        const goToCreateUEQ = () => {
            navigate(`/q/create/`);
    }

    return (
        <div className={styles.wrapper}>
            <header className={styles.confirmation_header}>
                <h1 className={styles.h1}>Vielen Dank!</h1>
                <p className={styles.p}>Dein ausgefülltes Formular wurde erfolgreich abgeschickt.</p>
            </header>
            <main className={styles.confirmation_main}>
                <img className={styles.image1} src={image1} alt="womenpciture"/>
                <p className={styles.text2}>Du möchtest auch UEQ Daten erheben und auswerten?</p>
                <p className={styles.text3}>Erstelle jetzt kostenlose UEQ-Fragebögen und werte sie Online aus.</p>
                <div className={styles.button1}>
                <button onClick={goToCreateUEQ} className={styles.btn1}>UEQ erstellen</button>
                </div>
            </main>
            <div className={styles.Footer}></div>
        </div>
  );
}
