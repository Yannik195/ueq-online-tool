import image1 from "./images/image1-women.png";
import styles from './Confirmation.module.scss';
import { useNavigate } from "react-router-dom";


export function Confirmation() {
  let navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.confirmation_header}>
        <h1 className={styles.h1}>Vielen Dank!</h1>
        <p className={styles.p}>Dein ausgefülltes Formular wurde erfolgreich abgeschickt.</p>
        <button onClick={() => navigate(-1)} className={styles.btn2}>Zurück zum Fragebogen</button>
      </header>
      <main className={styles.confirmation_main}>
        <img className={styles.image1} src={image1} alt="womenpciture" />
        <h2 className={styles.text2}>Du möchtest auch UEQ Daten erheben und auswerten?</h2>
        <p className={styles.text3}>Jetzt kostenlos UEQ erstellen und online auswerten.</p>
        <div className={styles.button1}>
          <button onClick={() => navigate("/q/create")} className={styles.btn1}>UEQ erstellen</button>
        </div>
      </main>
      <div className={styles.Footer}></div>
    </div>
  );
}
