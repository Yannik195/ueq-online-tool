import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsTable from "../../Components/ResultsTable.js"
import MeanValuePerItemChart from "../../Components/MeanValuePerItemChart.js"
import ScaleMeansVarianceTable from "../../Components/ScalesMeanVarianceTable.js"
import ScaleMeansVarianceChart from "../../Components/ScalesMeanVarianceChart.js"
import DistributionOfAnswers from "../../Components/DistributionOfAnswers.js"
import Participants from "../../Components/Participants.js"
import styles from "./Evaluate.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import AgeChart from "../../Components/AgeChart";

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

const calculateAttractivenessPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[0],
    obj.valuesTransformed[11],
    obj.valuesTransformed[13],
    obj.valuesTransformed[15],
    obj.valuesTransformed[23],
    obj.valuesTransformed[24]
    ];
    result.push(mean(values));
  }

  return result;
};

const calculatePerspicuityPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[1],
    obj.valuesTransformed[3],
    obj.valuesTransformed[12],
    obj.valuesTransformed[20]
    ];
    result.push(mean(values));
  }

  return result;
};

const calculateEfficiencyPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[8],
    obj.valuesTransformed[19],
    obj.valuesTransformed[21],
    obj.valuesTransformed[22]
    ];
    result.push(mean(values));
  }

  return result;
};

const calculateDependabilityPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[7],
    obj.valuesTransformed[10],
    obj.valuesTransformed[16],
    obj.valuesTransformed[18]
    ];
    result.push(mean(values));
  }

  return result;
};

const calculateStimulationPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[4],
    obj.valuesTransformed[5],
    obj.valuesTransformed[6],
    obj.valuesTransformed[17]
    ];
    result.push(mean(values));
  }

  return result;
};

const calculateNoveltyPerPerson = arr => {
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const result = [];
  for (const obj of arr) {
    const values = [obj.valuesTransformed[2],
    obj.valuesTransformed[9],
    obj.valuesTransformed[14],
    obj.valuesTransformed[25]
    ];
    result.push(mean(values));
  }

  return result;
};

function calculateScaleMeansPerPerson(data) {
  const attractiveness = calculateAttractivenessPerPerson(data);
  const perspicuity = calculatePerspicuityPerPerson(data);
  const efficiency = calculateEfficiencyPerPerson(data);
  const dependability = calculateDependabilityPerPerson(data);
  const stimulation = calculateStimulationPerPerson(data);
  const novelty = calculateNoveltyPerPerson(data);

  return {
    attractiveness,
    perspicuity,
    efficiency,
    dependability,
    stimulation,
    novelty
  };
}

export function Evaluate() {
  const { link_uuid } = useParams()
  const [q, setQuestionnaire] = useState({});
  const [age, setAge] = useState()
  let [isLoading, setLoading] = useState(true)
  let [isExcelLoading, setExcelLoading] = useState(false)

  useEffect(() => {
    //Query Data
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/q/evaluate/${link_uuid}`)
      .then(function (response) {
        setQuestionnaire(response.data)
        setAge(response.data)
      })
      .catch(function (error) {
        console.log(error);
      }).finally(function () {
        setLoading(false)
      })
  }, [])

  async function excel() {
    setExcelLoading(true)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/export/excel/${link_uuid}`,
      {
        responseType: 'blob',
        headers: {
          'Content-Type': 'blob',
        }
      })
      .then((response) => {
        setExcelLoading(false)
        console.log("Excel Response", response.data);
        //window.open(URL.createObjectURL(response.data));

        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', `${link_uuid}.xlsx`); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      })
      .catch((error) => console.log(error));
  }


  if (isLoading) {
    return <span>Loading</span>
  }
  return (
    <div className={styles.evaluate}>
      <Link to={`/q/fill/${link_uuid}`}>{q.product}</Link> <span> &#60; </span> <Link to={`/q/evaluate/${link_uuid}`}>Evaluate</Link>
      <h1>Evaluate</h1>
      <h2>{q.product}</h2>
      <p>{q.description}</p>
      <Participants number={q.results.length} link_uuid={`${link_uuid}`} />

      <div className={styles.downloadExcel}>
        <h3>Need more data?</h3>
        <p>You can download your data in the official Excel file from the <a href="https://www.ueq-online.org/">official source</a> of the UEQ.</p>

        <button className={styles.downloadButton} onClick={excel}>
          {isExcelLoading ?
            <FontAwesomeIcon className={`${styles.icon} ${styles.spinner}`} icon={faCircleNotch} />
            : <FontAwesomeIcon className={styles.icon} icon={faFileExcel} />
          }
          Download Excel
        </button>
      </div>

      <ResultsTable results={q.results} />
      <MeanValuePerItemChart results={q.results} />
      <DistributionOfAnswers results={q.results} />
      <ScaleMeansVarianceChart results={calculateScaleMeansPerPerson(q.results)} />
      <ScaleMeansVarianceTable results={calculateScaleMeansPerPerson(q.results)} />
      <AgeChart results={q.results}></AgeChart>
    </div>
  );
}