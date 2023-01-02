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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      name: "Pasi",
      image: pasi,
      title: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: ""
        }
      ]
    },
    {
      name: "Liljana",
      image: liljana,
      title: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: ""
        }
      ]
    },
    {
      name: "Phuc",
      image: phuc,
      title: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      links: [
        {
          type: "Github",
          icon: faGithub,
          link: ""
        }
      ]
    },
  ]


  return (
    <section className={styles.team}>
      <h1>Team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
