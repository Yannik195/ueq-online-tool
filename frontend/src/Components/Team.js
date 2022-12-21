import styles from "./Team.module.scss"
import { useNavigate } from "react-router-dom";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";


export default function Hero() {
    let person1 = require('../images/PHOTO-2022-10-25-13-48-03.jpg');
    let person2 = require('../images/IMG_4689 3.png')
    let person3 = require('../images/31849654.jpeg')
    let person4 = require('../images/IMG_1430.jpg')
    

  return (
    <section className={styles.team}>
    <div class="top">
        <h1 className={styles.h1}><span className={styles.orange}>Our Team:</span></h1>
    </div>
    <div class="bottom">
      <div className={styles.border}>
      <div className={styles.person}>
        <div className={styles.circular}>
        <img src={person1}></img>
        </div>
        <div className={styles.cont}>
        <div>Liljana</div>
        <span >Web Developer</span>
        </div>
      </div>
      <div className={styles.person}>
        <div class={styles.circular}>
        <img src={person2}></img>
        </div>
        <div>
        <div>Liljana</div>
        <span class="post">Web Developer</span>
        </div>
      </div>
      <div className={styles.person}>
        <div class={styles.circular}>
        <img src={person3}></img>
        </div>
        <div>
        <div>Yannik</div>
        <span class="post">Web Developer</span>
        </div>
      </div>
      <div className={styles.person}>
        <div class={styles.circular}>
        <img src={person4}></img>
        </div>
        <div>
        <div>Phuc</div>
        <span class="post">Web Developer</span>
       </div>
      </div>
    </div>
    </div>
  </section>
  )
}
