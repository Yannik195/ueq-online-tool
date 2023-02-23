import styles from "./Team.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Hero() {
  let yannik = require('../images/yannik.jpeg');
  let liljana = require('../images/liljana.png')
  let pasi = require('../images/pasi.jpg')
  let phuc = require('../images/phuc.jpg')

  const team = [
    {
      name: "Yannik",
      image: yannik,
      title: "Web Developer",
      description: "Viel hilft viel - Albert Einstein",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: "https://github.com/Yannik195"
        },
        {
          type: "LinkedIn",
          icon: faLinkedin,
          link: "https://www.linkedin.com/in/yannik-simon-498b50192/"
        }
      ]
    },
    {
      name: "Pascal",
      image: pasi,
      title: "Web Developer",
      description: "Wenn du etwas so machst, wie du es seit zehn Jahren gemacht hast, dann sind die Chancen groß, dass du es falsch machst.",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: "https://github.com/PascalPalitzsch"
        }
      ]
    },
    {
      name: "Liljana",
      image: liljana,
      title: "Web Developer",
      description: "Warum hat die produktive Kerze ihren Job gekündigt? Weil sie sich ausgebrannt hatte.",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: "https://github.com/LilJane96"
        },
        {
          type: "LinkedIn",
          icon: faLinkedin,
          link: "https://www.linkedin.com/in/liljana-stefanelli-060b13200/"
        }
      ]
    },
    {
      name: "Phuc",
      image: phuc,
      title: "Web Developer",
      description: "你好，我叫Phuc。",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: "https://github.com/hpvo69"
        }
      ]
    },
  ]


  return (
    <section className={styles.team}>
      <h1>Team</h1>
      <p>Projektteam des UEQ Online Tools, Wintersemester 22/23</p>
      <div className={styles.container}>
        {team.map((person, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.top}>
                <img src={person.image}></img>
                <div>
                  <h2>{person.name}</h2>
                  <div className={styles.title}>
                    <p>{person.title}</p>
                    <div className={styles.circle} />
                    {person.links.map((link, i) => {
                      return (
                        <a href={link.link}>
                          <FontAwesomeIcon className={styles.icon} icon={link.icon} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
              <p>{person.description}</p>
            </div>
          )
        })}
      </div>

    </section>
  )
}
