import Hero from "../Components/Hero"
import styles from "../scss/Home.module.scss"
import { useNavigate } from "react-router-dom";
import Team from "../Components/Team"

export function Home() {
  let navigate = useNavigate();

  return <div>
    <Hero></Hero>

    <section className={styles.banner}>
      <div class="row">
      <div class={styles.row}>
        <div className={styles.rowLeft}>
          <div className={styles.title}>How does it work</div>
          <div className={styles.content}>Create a UEQ for free by describing your product and share the custom link we create about your product to evaluate it.
          As a result you will receive the completed questionnaires and the evaluated graphs.
          </div>
        </div>
        <div className={styles.rowMiddle}>
          <div className={styles.title}>Do I need an Account</div>
          <div className={styles.content}>Instead of an account, we use only the e-mail you entered and secure it with a password to protect the final results from third parties. We do not need any further data from you.
          </div>
        </div>
        <div className={styles.rowRight}>
          <div className={styles.title}>What does it cost</div>
          <div className={styles.content}>The UEQ is free of charge and available to anyone who wants to test their product for usability.
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className={styles.questionnaire}>
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
      <Team></Team>
  </section>
  </div>
}