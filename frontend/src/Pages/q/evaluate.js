import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

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

export function Evaluate() {
  const { id } = useParams()
  const [questionnaire, setQuestionnaire] = useState({});

  //Fetch Data 
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/api/questionnaire/${id}`)
      .then(response => response.json())
      .then(data => setQuestionnaire(data));
  }, []);

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
      <Bar data={data} />

    </header>
  );
}

