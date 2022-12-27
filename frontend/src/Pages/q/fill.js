import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'
import Popup from "../../Components/Popup"
import Infobanner from "../../Components/Infobanner"
import styles from "./Fill.module.css"

export function Fill() {
  //Parameters
  const { link_uuid } = useParams()

  //React Router
  let navigate = useNavigate();

  const items = {
    scales: {
      attractiveness: {
        index: 1,
        german: "Attraktivität",
        english: "Attractiveness"
      },
      perspicuity: {
        index: 2,
        german: "Durchschaubarkeit",
        english: "Perspicuity"
      },
      efficiency: {
        index: 3,
        german: "Effizienz",
        english: "Efficiency"
      },
      dependability: {
        index: 4,
        german: "Steuerbarkeit",
        english: "Dependability"
      },
      stimulation: {
        index: 5,
        german: "Stimulation",
        english: "Stimulation"
      },
      novelty: {
        index: 6,
        german: "Originalität",
        english: "Novelty"
      }
    },
    items: [
      {
        index: 1,
        terms: {
          german: {
            positive: "erfreulich",
            negative: "unerfreulich",
          },
          english: {
            positive: "enjoyable",
            negative: "annoying",
          }
        },
        scale: 1,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 2,
        terms: {
          german: {
            positive: "verständlich",
            negative: "unverständlich",
          },
          english: {
            positive: "understandable",
            negative: "not understandable",
          }
        },
        scale: 2,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 3,
        terms: {
          german: {
            positive: "kreativ",
            negative: "phantasielos",
          },
          english: {
            positive: "creative",
            negative: "dull",
          }
        },
        scale: 6,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 4,
        terms: {
          german: {
            positive: "leicht zu lernen",
            negative: "schwer zu lernen",
          },
          english: {
            positive: "easy to learn",
            negative: "difficult to learn",
          }
        },
        scale: 2,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 5,
        terms: {
          german: {
            positive: "wertvoll",
            negative: "minderwertig",
          },
          english: {
            positive: "valuable",
            negative: "inferior",
          },
        },
        scale: 5,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 6,
        terms: {
          german: {
            positive: "spannend",
            negative: "langweilig",
          },
          english: {
            positive: "exciting",
            negative: "boring",
          }
        },
        scale: 5,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 7,
        terms: {
          german: {
            positive: "interessant",
            negative: "uninteressant",
          },
          english: {
            positive: "interesting",
            negative: "not interesting",
          }
        },
        scale: 5,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 8,
        terms: {
          german: {
            positive: "voraussagbar",
            negative: "unberechenbar",
          },
          english: {
            positive: "predictable",
            negative: "unpredictable",
          }
        },
        scale: 4,
        reversed: true,
        value: 4,
        value_transformed: 0,
      },
      {
        index: 9,
        terms: {
          german: {
            positive: "schnell",
            negative: "langsam",
          },
          english: {
            positive: "fast",
            negative: "slow",
          }
        },
        scale: 3,
        reversed: false,
        value: 4,
        value_transformed: 0,
      },
      {
        index: 10,
        terms: {
          german: {
            positive: "originell",
            negative: "konventionell",
          },
          english: {
            positive: "inventive",
            negative: "conventional",
          }
        },
        scale: 6,
        reversed: false,
        value: 4,
        value_transformed: 0,
      },
      {
        index: 11,
        terms: {
          german: {
            positive: "behindernd",
            negative: "unterstützend",
          },
          english: {
            positive: "supportive",
            negative: "obstructive",
          }
        },
        scale: 4,
        reversed: true,
        value: 4,
        value_transformed: 0,
      },
      {
        index: 12,
        terms: {
          german: {
            positive: "gut",
            negative: "schlecht",
          },
          english: {
            positive: "good",
            negative: "bad",
          }
        },
        scale: 1,
        reversed: false,
        value: 4,
        value_transformed: 0,
      },
      {
        index: 13,
        terms: {
          german: {
            positive: "einfach",
            negative: "kompliziert",
          },
          english: {
            positive: "easy",
            negative: "complicated",
          }
        },
        scale: 2,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 14,
        terms: {
          german: {
            positive: "anziehend",
            negative: "abstoßend",
          },
          english: {
            positive: "pleasing",
            negative: "unlikable",
          }
        },
        scale: 1,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 15,
        terms: {
          german: {
            positive: "neuartig",
            negative: "herkömmlich",
          },
          english: {
            positive: "leading edge",
            negative: "usual",
          }
        },
        scale: 6,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 16,
        terms: {
          german: {
            positive: "angenehm",
            negative: "unangenehm",
          },
          english: {
            positive: "pleasent",
            negative: "unpleasant",
          }
        },
        scale: 1,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 17,
        terms: {
          german: {
            positive: "sicher",
            negative: "unsicher",
          },
          english: {
            positive: "secure",
            negative: "not secure",
          }
        },
        scale: 4,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 18,
        terms: {
          german: {
            positive: "aktivierend",
            negative: "einschläfernd",
          },
          english: {
            positive: "motivating",
            negative: "demotivating",
          }
        },
        scale: 5,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 19,
        terms: {
          german: {
            positive: "erwartungskonform",
            negative: "nicht erwartungskonform",
          },
          english: {
            positive: "meets expectations",
            negative: "does not meet expectations",
          }
        },
        scale: 4,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 20,
        terms: {
          german: {
            positive: "effizient",
            negative: "ineffizient",
          },
          english: {
            positive: "efficient",
            negative: "inefficient",
          }
        },
        scale: 3,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 21,
        terms: {
          german: {
            positive: "übersichtlich",
            negative: "verwirrend",
          },
          english: {
            positive: "clear",
            negative: "confusing",
          }
        },
        scale: 2,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 22,
        terms: {
          german: {
            positive: "pragmatisch",
            negative: "unpragmatisch",
          },
          english: {
            positive: "practical",
            negative: "impractical",
          }
        },
        scale: 3,
        reversed: true,
        value: 4,
        value_transformed: 0
      },
      {
        index: 23,
        terms: {
          german: {
            positive: "aufgeräumt",
            negative: "überladen",
          },
          english: {
            positive: "organized",
            negative: "cluttered",
          }
        },
        scale: 3,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 24,
        terms: {
          german: {
            positive: "attraktiv",
            negative: "unattraktiv",
          },
          english: {
            positive: "attractive",
            negative: "unattractive",
          }
        },
        scale: 1,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 25,
        terms: {
          german: {
            positive: "sympathisch",
            negative: "unsympathisch",
          },
          english: {
            positive: "friendly",
            negative: "unfriendly",
          }
        },
        scale: 1,
        reversed: false,
        value: 4,
        value_transformed: 0
      },
      {
        index: 26,
        terms: {
          german: {
            positive: "konservativ",
            negative: "innovativ",
          },
          english: {
            positive: "conservative",
            negative: "innovative",
          }
        },
        scale: 6,
        reversed: true,
        value: 4,
        value_transformed: 0
      }
    ]
  }

  const [result, setResult] = useState(items.items)
  const [demographics, setDemographics] = useState({
    age: 0,
    gender: null,
    education: 0
  })

  //Popup
  const [editNamePopup, seteditNamePopupVisibility] = useState(false)

  //Questionnaire
  const [q, setQuestionnaire] = useState({});

  //Query Data
  useEffect(() => {
    console.log("Load Data");
    fetch(`http://localhost:3001/api/q/fill/${link_uuid}`)
      .then(response => response.json())
      .then(data => setQuestionnaire(data));
  }, [editNamePopup]);

  function handleDemographicsChange(event) {
    const value = event.target.value;
    setDemographics({
      ...demographics,
      [event.target.name]: value
    });
  }

  const handleFormChange = (index, event) => {
    let newArray = result.map((item, i) => {
      if (item.index === index + 1) {
        item.value = parseInt(event.target.value)
        item.value_transformed = transformValue(item)
        return item
      } else {
        return item
      }
    })
    setResult(newArray)
    console.log("Result", result);
  }

  function transformValue(item) {
    if (item.reversed) {
      return item.value - 4;
    } else {
      return 4 - item.value;
    }
  }

  function getValuesTransformed() {
    const transformedValues = [];

    for (const item of items.items) {
      transformedValues.push(item.value_transformed);
    }

    console.log("Transformed Values", transformedValues);

    return transformedValues;
  }

  function extractValueTransformedFromItems() {
    console.log("Items", result);
    return result.map(item => item.value_transformed);
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3001/api/result`, {
      values_transformed: extractValueTransformedFromItems(),
      link_uuid: link_uuid,
      subject: {
        age: demographics.age,
        gender: demographics.gender,
        education: demographics.education,
      }
    })
      .then(res => {
        console.log(res.data);
        navigate("/confirmation")
      })
  }

  return (
    <div className={styles.container}>
      <h1>UEQ Online Fragebogen</h1>
      <p>{moment(q.createdAt).format("DD.MM.YYYY")}</p>
      <p>{q.email}</p>
      <button onClick={() => navigate(`/q/evaluate/${link_uuid}`)}>Evaluation</button>
      <h2>{q.product}</h2>
      <p>{q.description}</p>

      <button onClick={() => seteditNamePopupVisibility(true)}>Name bearbeiten</button>
      <Popup visible={editNamePopup} setVisible={seteditNamePopupVisibility} questionnaire={q} />


      <Infobanner
        title="Was ist Questionnaire?"
        content="Ein Questionaire (Fragebogen) ist ein Instrument zur Datenerhebung. Fragebogen werden vor allem in Psychologie und Sozialwissenschaften verbreitet eingesetzt, um soziale und politische Einstellungen, Meinungen, Interessen und psychologische Merkmale zu erfassen.">
      </Infobanner>

      <form onSubmit={handleSubmit}>
        <h2>Fragebogen</h2>
        <p>Um das Produkt zu bewerten, füllen Sie bitte den nachfolgenden Fragebogen aus. Er besteht aus Gegensatzpaaren von Eigenschaften, die das Produkt haben kann. Abstufungen zwischen den Gegensätzen sind durch Kreise dargestellt. Durch Ankreuzen eines dieser Kreise können Sie Ihre Zustimmung zu einem Begriff äußern.
          Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen kommt.
          Es gibt keine „richtige“ oder „falsche“ Antwort. Ihre persönliche Meinung zählt!</p>
        <h2>Angaben zu Person</h2>
        <p>Collecting user data is important for understanding and analyzing the results of a questionnaire. Age, gender, and education level can all impact a user's experience and responses. By including these demographics in the data collection, it allows for a more comprehensive understanding of the results and how they may vary among different groups. This can help to identify any potential biases or outliers in the data and provide a more accurate representation of the user experience.</p>

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

        <div className={styles.ueq}>
          <h2>UEQ</h2>

          {items.items.map((item, i) => {
            return (
              <div className={styles.row} key={i}>
                <div className={styles.items}>
                  <span>{item.reversed ? item.terms.english.negative : item.terms.english.positive}</span>
                  <span>{!item.reversed ? item.terms.english.negative : item.terms.english.positive}</span>
                </div>
                <div className={styles.inputs}>
                  <input type="radio" id={i} name={i} value="1" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="2" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="3" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="4" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="5" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="6" onChange={event => handleFormChange(i, event)} />
                  <input type="radio" id={i} name={i} value="7" onChange={event => handleFormChange(i, event)} />

                </div>
              </div>
            )
          }
          )}
        </div>


        <label className={styles.consent} htmlFor="consent">
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

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}