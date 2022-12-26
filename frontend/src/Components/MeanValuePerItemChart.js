import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function MeanValuePerItemChart(props) {
  const { results } = props;
  let items_german = [["unerfreulich", "erfreulich"],
  ["unverständlich", "verständlich"],
  ["kreativ", "phantasielos"],
  ["leicht zu lernen", "schwer zu lernen"],
  ["wertvoll", "minderwertig"],
  ["langweilig", "spannend"],
  ["uninteressant", "interessant"],
  ["unberechenbar", "voraussagbar"],
  ["schnell", "langsam"],
  ["originell", "konventionell"],
  ["behindernd", "unterstützend"],
  ["gut", "schlecht"],
  ["kompliziert", "einfach"],
  ["abstoßend", "anziehend"],
  ["herkömmlich", "neuartig"],
  ["unangenehm", "angenehm"],
  ["sicher", "unsicher"],
  ["aktivierend", "einschläfernd"],
  ["erwartungskonform", "nicht erwartungskonform"],
  ["ineffizient", "effizient"],
  ["übersichtlich", "verwirrend"],
  ["unpragmatisch", "pragmatisch"],
  ["aufgeräumt", "überladen"],
  ["attraktiv", "unattraktiv"],
  ["sympathisch", "unsympathisch"],
  ["konservativ", "innovativ"]
  ];

  function extractValueTransformed(results) {
    return results.map((result) => result.valuesTransformed);
  }

  const valueTransformed = extractValueTransformed(results);

  const labels = items_german.map((item) => item.join('/'));
  const data = items_german.map((item, index) => {
    const resultNumbers = valueTransformed.map((result) => result[index]);
    const mean = resultNumbers.reduce((a, b) => a + b, 0) / resultNumbers.length;
    return mean.toFixed(2);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Mean Values',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
  }

  return (
    <div>
      <h2>Mean Value per Item</h2>
      <p>The mean value for an item represents the average evaluation of that item by a group of people. Values between -0.8 and 0.8 are considered neutral, values greater than 0.8 are considered positive, and values less than -0.8 are considered negative. The scale ranges from -3 (horribly bad) to +3 (extremely good), but in most cases, values outside of the range of -2 to +2 are unlikely to be observed due to the influence of different opinions and answer tendencies on the mean calculation. When communicating the results to others, it may be helpful to use the figure with the reduced scale of -2 to +2 for those with less knowledge of data interpretation and to avoid the need for detailed explanations of mean values and answer tendencies.</p>
      <Bar data={chartData} options={options} />
    </div>
  );
}
