import { useParams } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';

export function Fill() {
  const { id } = useParams()
  let items_german = [["unerfreulich", "erfreulich"], ["unverständlich", "verständlich"], ["kreativ", "phantasielos"], ["leicht zu lernen", "schwer zu lernen"], ["wertvoll", "minderwertig"], ["langweilig", "spannend"], ["uninteressant", "interessant"], ["unberechenbar", "voraussagbar"], ["schnell", "langsam"], ["originell", "konventionell"], ["behindernd", "unterstützend"], ["gut", "schlecht"], ["kompliziert", "einfach"], ["abstoßend", "anziehend"], ["herkömmlich", "neuartig"], ["unangenehm", "angenehm"], ["sicher", "unsicher"], ["aktivierend", "einschläfernd"], ["erwartungskonform", "nicht erwartungskonform"], ["ineffizient", "effizient"], ["übersichtlich", "verwirrend"], ["unpragmatisch", "pragmatisch"], ["aufgeräumt", "überladen"], ["attraktiv", "unattraktiv"], ["sympathisch", "unsympathisch"], ["konservativ", "innovativ"]]
  const [result, setResult] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4])

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
        age: 23,
        gender: "female"
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      <h2>Angaben zu Person</h2>
      <h3>Was ist ein Questionnaire?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      <h2>Fragebogen</h2>
      <p>Um das Produkt zu bewerten, füllen Sie bitte den nachfolgenden Fragebogen aus. Er besteht aus Gegensatzpaaren von Eigenschaften, die das Produkt haben kann. Abstufungen zwischen den Gegensätzen sind durch Kreise dargestellt. Durch Ankreuzen eines dieser Kreise können Sie Ihre Zustimmung zu einem Begriff äußern.
        Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen kommt.
        Es gibt keine „richtige“ oder „falsche“ Antwort. Ihre persönliche Meinung zählt!</p>
      <form onSubmit={handleSubmit}>
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

