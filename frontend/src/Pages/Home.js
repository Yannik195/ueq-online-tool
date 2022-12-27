import Hero from "../Components/Hero"
import styles from "../scss/Home.module.scss"
import { useNavigate } from "react-router-dom";
import Team from "../Components/Team"
import FAQ from "../Components/FAQ"

export function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <Hero></Hero>
      <FAQ></FAQ>
      <Team></Team>


      {/*       <section className={styles.questionnaire}>
        <section className={styles.backgroundText}>
          <div class="top">
            <h1 className={styles.h1}><span className={styles.orange}>User Experience Questionnaire</span> </h1>
            <p className={styles.p}>
              The <span className={styles.orange}>User Experience Questionnaire (UEQ)</span> is an established questionnaire for measuring the user experience of interactive products. The questionnaire
              measures user experience on the dimensions of efficiency, transparency, controllability, stimulation, originality, and attractiveness.
              It makes your product comparable with competing products.

              Do you have a product that you would like to test for usability by having it tested and evaluated by users?
              With a few simple clicks you can describe your product and save it via a mail of your choice. With the randomly
              generated link, which you forward to the users, you can now easily have your product evaluated. As soon as you log back in with your mail, you can view the
              evaluation of your product in graphs. The questionnaires can also be translated into different languages.</p>
          </div>
          <div class="bottom">
            <button className={styles.button} onClick={() => navigate("q/create")}>Jetzt kostenlos UEQ erstellen*</button>
            <div className={styles.info}>*kein Account erforderlich</div>
          </div>
        </section>
      </section> */}
    </div>
  )
}