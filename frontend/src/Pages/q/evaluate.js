import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import ResultsTable from "../../Components/ResultsTable.js"
import Participants from "../../Components/Participants.js"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

//Todo adjust fake Results
//Create 200 fake Results
const createDummyResults = () => {
  return Array.from({ length: 200 }, () =>
    Array.from({ length: 26 }, () => (
      Math.ceil(Math.random() * 7) //A Random Number between 0 and 7
      - 4 //Subtract 4 from it
    )
    )
  );
};
const results = createDummyResults();

export function Evaluate() {
  const { link_uuid } = useParams()
  let navigate = useNavigate();
  const [q, setQuestionnaire] = useState({});

  //Fetch Data 
  useEffect(() => {
    console.log(link_uuid);
    fetch(`http://localhost:3001/api/q/evaluate/${link_uuid}`)
      .then(response => response.json())
      .then(data => setQuestionnaire(data))
      .then(console.log(q))
  }, []);

  function getValues(obj) {
    // initialize empty arrays to store the values and value_transformed properties
    let values = [];
    let valuesTransformed = [];

    // iterate over the result array
    for (let i = 0; i < obj.results.length; i++) {
      // get the value and value_transformed properties
      let value = obj.results[i].value;
      let valueTransformed = obj.results[i].value_transformed;

      // add the values to the appropriate arrays
      values.push(value);
      valuesTransformed.push(valueTransformed);
    }


    console.log(valuesTransformed)
    // return the arrays
    return [values, valuesTransformed];
  }

  let data = {
    labels: ['Attractiveness', 'Perspicuity', 'Efficiency', 'Dependability', 'Stimulation', 'Novelty'],
    datasets: [{
      label: 'Mean Value Per Item',
      data: [2.2, -1.1, 2.1, 2.4, 2.1, 1.7],
      backgroundColor: [
        '#FFA049',
      ],
      borderColor: [
        '#ffffff'
      ]
    }]
  }


  return (
    <header className="App-header">
      <h1>Evaluate</h1>
      <button onClick={() => navigate(`/q/fill/${link_uuid}`)}>Fill</button>

      <Participants number={results.length} />
      <ResultsTable results={results} />

      <Bar data={data} />

    </header>
  );
}

