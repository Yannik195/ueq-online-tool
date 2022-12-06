import { useParams } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';




  const languages = [
    {
      code: 'de', 
      name: 'Deutsch',
      country_code: 'de'
    },
    {
      code: 'en', 
      name: 'English',
      country_code: 'gb'
    },
    {
      code: 'fr', 
      name: 'Français',
      country_code: 'fr'
    },
    ]

  const GlobeIcon = ({width = 24, height =24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
  </svg>
  )

export function Fill() {
  
  const [locale, setLocale] = useState('en');
  const { id } = useParams()
  let items_german = [["unerfreulich", "erfreulich"], ["unverständlich", "verständlich"], ["kreativ", "phantasielos"], 
  ["leicht zu lernen", "schwer zu lernen"], ["wertvoll", "minderwertig"], ["langweilig", "spannend"], ["uninteressant", "interessant"], 
  ["unberechenbar", "voraussagbar"], ["schnell", "langsam"], ["originell", "konventionell"], ["behindernd", "unterstützend"], ["gut", "schlecht"], 
  ["kompliziert", "einfach"], ["abstoßend", "anziehend"], ["herkömmlich", "neuartig"], ["unangenehm", "angenehm"], ["sicher", "unsicher"], 
  ["aktivierend", "einschläfernd"], ["erwartungskonform", "nicht erwartungskonform"], ["ineffizient", "effizient"], 
  ["übersichtlich", "verwirrend"], ["unpragmatisch", "pragmatisch"], ["aufgeräumt", "überladen"], ["attraktiv", "unattraktiv"], 
  ["sympathisch", "unsympathisch"], ["konservativ", "innovativ"]]
  const [result, setResult] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4])
  const [demographics, setDemographics] = useState({
    age: 0,
    gender: 0,
    education: 0
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setDemographics({
      ...demographics,
      [evt.target.name]: value
    });
  }

  const handleFormChange = (index, event) => {
    let newArray = result.map((item, i) => {
      if (index === i) {
        return parseInt(event.target.value)
      } else {
        return item
      }
    })
    setResult(newArray)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3001/api/result`, {
      result,
      questionnaire: id,
      subject: {
        age: demographics.age,
        gender: demographics.gender
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <header className="App-header">
      <h1>UEQ Online Fragebogen</h1>
      <span>14.10.2022</span>
      <span>research@mail.de</span>
      <h2>Standmixer Bosch 1200W</h2>
      <p>Beschreibung Lorem ipsum dolor sit amet. Beschreibung consectetur adipiscing elit. </p>

      <h3>Was ist ein Questionnaire?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

      <form onSubmit={handleSubmit}>
        <h2>Fragebogen</h2>
        <p>Um das Produkt zu bewerten, füllen Sie bitte den nachfolgenden Fragebogen aus. Er besteht aus Gegensatzpaaren von Eigenschaften, die das Produkt haben kann. Abstufungen zwischen den Gegensätzen sind durch Kreise dargestellt. Durch Ankreuzen eines dieser Kreise können Sie Ihre Zustimmung zu einem Begriff äußern.
          Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen kommt.
          Es gibt keine „richtige“ oder „falsche“ Antwort. Ihre persönliche Meinung zählt!</p>


        <h2>Angaben zu Person</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

        <label>
          Age
          <input
            type="text"
            name="age"
            value={demographics.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender
          <input
            type="text"
            name="gender"
            value={demographics.gender}
            onChange={handleChange}
          />
        </label>
        <label>
          Education
          <input
            type="text"
            name="education"
            value={demographics.education}
            onChange={handleChange}
          />
        </label>
        <div className="container">
      <div className='d-flex justify-content-end'>
      <div className="dropdown">
  <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <GlobeIcon />
  </button>
  <ul className="dropdown-menu">
    {languages.map(({code, name, country_code}) => (
      <li key={country_code}>
        <button className="dropdown-item" onClick={ () => i18next.changeLanguage(code)}>
          <span className={`fi fi-${country_code} mx-2`}
          ></span>
          {name}
        </button>
        </li>
    ))}
    

  </ul>
</div>
        </div>
        </div>

        {items_german.map((items, i) => {
          return (
            
            <div key={i}>
              <span>{items[0]}</span>
              <input type="radio" id={i} name={i} value="1" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="2" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="3" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="4" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="5" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="6" onChange={event => handleFormChange(i, event)} />
              <input type="radio" id={i} name={i} value="7" onChange={event => handleFormChange(i, event)} />
              <span>{items[1]}</span>
            </div>
            
          )
        }
        )}
        Ja, Ich bin mit der Einverständniserklärung einverstanden.
        <input type="submit" value="Submit" />
      </form>

    </header>
  );
}

