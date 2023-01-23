import styles from "./Hero.module.scss"
import { useNavigate } from "react-router-dom";


export default function Hero() {
  let navigate = useNavigate();

  return (
    <section className={styles.hero}>

      <div>
        <h1 className={styles.h1}><span className={styles.orange}>Collect</span> and <span className={styles.orange}>evaluate</span> your UEQ results </h1>
        <p className={styles.p}>This easy-to-use tool streamlines your tasks and saves you time, so you can focus on what matters most. Try UEQ today and see how it can make a difference for you.</p>
      </div>
      <div>
        <button className={styles.button} onClick={() => navigate("q/create")}>Jetzt kostenlos UEQ erstellen*</button>
        <p>*kein Account erforderlich</p>
      </div>

    </section>
  )
}