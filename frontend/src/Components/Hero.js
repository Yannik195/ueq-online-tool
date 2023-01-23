import styles from "./Hero.module.scss"
import { useNavigate } from "react-router-dom";


export default function Hero() {
  let navigate = useNavigate();

  return (
    <section className={styles.hero}>

      <div>
        <h1 className={styles.h1}><span className={styles.orange}>Collect</span> and <span className={styles.orange}>evaluate</span> your UEQ results </h1>
        <p className={styles.p}>Easy-to-use tool to collect and evaluate Usability Engineering Questionnaire results. Streamline your tasks and save time so you can focus on what matters most.
          Try UEQ Online Tool today to test the usability of your products and services.</p>
      </div>
      <div>
        <button className={styles.button} onClick={() => navigate("q/create")}>Jetzt kostenlos UEQ erstellen*</button>
        <p>*kein Account erforderlich</p>
      </div>

    </section>
  )
}