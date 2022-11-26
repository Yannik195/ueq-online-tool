import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export function Evaluate() {
  const { link_uuid } = useParams()
  const [questionnaire, setQuestionnaire] = useState({});

  //Fetch Data 
  useEffect(() => {
    console.log(link_uuid);
    fetch(`http://localhost:3001/api/q/${link_uuid}`)
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

