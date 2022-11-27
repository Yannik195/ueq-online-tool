import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'


export function Fill() {
  const { link_uuid } = useParams()
  let items_german = [["unerfreulich", "erfreulich"], ["unverständlich", "verständlich"], ["kreativ", "phantasielos"], ["leicht zu lernen", "schwer zu lernen"], ["wertvoll", "minderwertig"], ["langweilig", "spannend"], ["uninteressant", "interessant"], ["unberechenbar", "voraussagbar"], ["schnell", "langsam"], ["originell", "konventionell"], ["behindernd", "unterstützend"], ["gut", "schlecht"], ["kompliziert", "einfach"], ["abstoßend", "anziehend"], ["herkömmlich", "neuartig"], ["unangenehm", "angenehm"], ["sicher", "unsicher"], ["aktivierend", "einschläfernd"], ["erwartungskonform", "nicht erwartungskonform"], ["ineffizient", "effizient"], ["übersichtlich", "verwirrend"], ["unpragmatisch", "pragmatisch"], ["aufgeräumt", "überladen"], ["attraktiv", "unattraktiv"], ["sympathisch", "unsympathisch"], ["konservativ", "innovativ"]]
  const [result, setResult] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4])
  const [demographics, setDemographics] = useState({
    age: 0,
    gender: null,
    education: 0
  })

  //Questionnaire
  const [q, setQuestionnaire] = useState({});

  //Query Data
  useEffect(() => {
    console.log(link_uuid);
    fetch(`http://localhost:3001/api/q/fill/${link_uuid}`)
      .then(response => response.json())
      .then(data => setQuestionnaire(data));
  }, []);

  function handleDemographicsChange(event) {
    const value = event.target.value;
    setDemographics({
      ...demographics,
      [event.target.name]: value
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
      link_uuid: link_uuid,
      subject: {
        age: demographics.age,
        gender: demographics.gender,
        education: demographics.education,
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
      <p>{moment(q.createdAt).format("DD.MM.YYYY")}</p>
      <p>{q.email}</p>
      <button>Evaluation</button>
      <h2>{q.product}</h2>
      <p>{q.description}</p>

      <h3>Was ist ein Questionnaire?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

      <form onSubmit={handleSubmit}>
        <h2>Fragebogen</h2>
        <p>Um das Produkt zu bewerten, füllen Sie bitte den nachfolgenden Fragebogen aus. Er besteht aus Gegensatzpaaren von Eigenschaften, die das Produkt haben kann. Abstufungen zwischen den Gegensätzen sind durch Kreise dargestellt. Durch Ankreuzen eines dieser Kreise können Sie Ihre Zustimmung zu einem Begriff äußern.
          Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen kommt.
          Es gibt keine „richtige“ oder „falsche“ Antwort. Ihre persönliche Meinung zählt!</p>


        <h2>Angaben zu Person</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

        <label htmlFor="age">
          <strong>Age</strong>
          <br></br>
          <input
            type="number"
            min="0"
            max="99"
            name="age"
            value={demographics.age}
            onChange={handleDemographicsChange}
          />
          <br></br>
        </label>

        <label htmlFor="gender">
          <strong>Gender</strong>
          <br></br>
          <select id="gender" name="gender" value={demographics.gender}
            onChange={handleDemographicsChange}>
            <option value="null">Auswählen</option>
            <option value="male">Mann</option>
            <option value="female">Frau</option>
          </select>
          <br></br>
        </label>

        <label htmlFor="education">
          <strong>Education</strong>
          <br></br>
          <select id="education" name="education" value={demographics.education}
            onChange={handleDemographicsChange}>
            <option value="">Ausählen</option>
            <option value="1">Kein Schulabschluss</option>
            <option value="2">Grund-/Hauptschulabschluss</option>
            <option value="3">Realschule (Mittlere Reife)</option>
            <option value="4">Gymnasium (Abitur)</option>
            <option value="5">Abgeschlossene Ausbildung</option>
            <option value="6">Fachhochschulabschluss</option>
            <option value="7">Hochschule (Diplom)</option>
            <option value="8">Hochschule (Magister)</option>
            <option value="9">Hochschule (Promotion)</option>
            <option value="10">Sostige</option>
          </select>
          <br></br>
        </label>

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

        <label htmlFor="consent">
          <input
            type="checkbox"
            name="consent"
            value={demographics.age}
            onChange={handleDemographicsChange}
            style={{ float: "left" }}
            required
          />
          <p>Ja, Ich bin mit der Einverständniserklärung einverstanden</p>
          <br></br>
        </label>



        <input type="submit" value="Submit" />
      </form>

    </header>
  );
}

