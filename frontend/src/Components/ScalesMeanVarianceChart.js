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

const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
const variance = arr => {
  const m = mean(arr);
  return mean(arr.map(x => (x - m) ** 2));
};

export default function ScaleMeansVarianceChart({ results }) {
  console.log("Results", results);
  let data = {
    labels: ['Attractiveness', 'Perspicuity', 'Efficiency', 'Dependability', 'Stimulation', 'Novelty'],
    datasets: [{
      label: 'Mean Value Per Item',
      data: [mean(results.attractiveness), mean(results.perspicuity), mean(results.efficiency), mean(results.dependability), mean(results.stimulation), mean(results.novelty)],
      backgroundColor: [
        '#FFA049',
      ],
      borderColor: [
        '#ffffff'
      ]
    }]
  }


  return (
    <div>
      <h1>Scales (Mean & Variance)</h1>
      <p>The table and chart show the mean, variance, and standard deviation of the attractiveness, perspicuity, efficiency, dependability, stimulation, and novelty scales. The mean represents the average rating given by participants for each scale. The variance indicates how much the ratings for a scale differ from the mean. A higher variance means that there is more variation in the ratings, while a lower variance means that the ratings are more consistent. The standard deviation is a measure of how spread out the ratings are, with a higher standard deviation indicating more variation and a lower standard deviation indicating less variation. By looking at the mean, variance, and standard deviation for each scale, you can get a sense of how positively or negatively the scale was rated by participants and how much variation there was in the ratings.</p>
      <Bar data={data} />
    </div>
  );
}

