import { Bar } from 'react-chartjs-2';

//http://localhost:3000/q/evaluate/Bespoke-Plastic-Chicken-9218ed1c-a5d9-4bac-bbac-569e91df7420

export default function DistributionOfAnswers(props) {
  const { results } = props;
  const items_german = [['unerfreulich', 'erfreulich'],
  ['unverständlich', 'verständlich'],
  ['kreativ', 'phantasielos'],
  ['leicht zu lernen', 'schwer zu lernen'],
  ['wertvoll', 'minderwertig'],
  ['langweilig', 'spannend'],
  ['uninteressant', 'interessant'],
  ['unberechenbar', 'voraussagbar'],
  ['schnell', 'langsam'],
  ['originell', 'konventionell'],
  ['behindernd', 'unterstützend'],
  ['gut', 'schlecht'],
  ['kompliziert', 'einfach'],
  ['abstoßend', 'anziehend'],
  ['herkömmlich', 'neuartig'],
  ['unangenehm', 'angenehm'],
  ['sicher', 'unsicher'],
  ['aktivierend', 'einschläfernd'],
  ['erwartungskonform', 'nicht erwartungskonform'],
  ['ineffizient', 'effizient'],
  ['übersichtlich', 'verwirrend'],
  ['unpragmatisch', 'pragmatisch'],
  ['aufgeräumt', 'überladen'],
  ['attraktiv', 'unattraktiv'],
  ['sympathisch', 'unsympathisch'],
  ['konservativ', 'innovativ'],
  ];

  const calculateDistributionOfAnswers = (results) => {
    // Initialize an array of 7 arrays, each with 26 elements set to 0
    const distributionOfAnswers = Array(7).fill(0).map(() => Array(26).fill(0));

    // Iterate through the results array
    for (const result of results) {
      // Iterate through the valuesTransformed array
      for (let i = 0; i < result.valuesTransformed.length; i++) {
        // Get the value at the current index
        const value = result.valuesTransformed[i];
        // Increment the corresponding element in the distributionOfAnswers array
        distributionOfAnswers[value + 3][i]++;
      }
    }

    return distributionOfAnswers;
  }

  const distributionOfAnswers = calculateDistributionOfAnswers(results);

  console.log(distributionOfAnswers);

  const color1 = '#f72585';
  const color2 = '#7209b7';
  const color3 = '#560bad';
  const color4 = '#3a0ca3';
  const color5 = '#3f37c9';
  const color6 = '#4361ee';
  const color7 = '#4cc9f0';

  const data = [
    {
      label: "-3",
      data: distributionOfAnswers[0],
      backgroundColor: color1,
      borderColor: color1,
      borderWidth: 1,
    },
    {
      label: "-2",
      data: distributionOfAnswers[1],
      backgroundColor: color2,
      borderColor: color2,
      borderWidth: 1,
    },
    {
      label: "-1",
      data: distributionOfAnswers[2],
      backgroundColor: color3,
      borderColor: color3,
      borderWidth: 1,
    },
    {
      label: "0",
      data: distributionOfAnswers[3],
      backgroundColor: color4,
      borderColor: color4,
      borderWidth: 1,
    },
    {
      label: "1",
      data: distributionOfAnswers[4],
      backgroundColor: color5,
      borderColor: color5,
      borderWidth: 1,
    },
    {
      label: "2",
      data: distributionOfAnswers[5],
      backgroundColor: color6,
      borderColor: color6,
      borderWidth: 1,
    },
    {
      label: "3",
      data: distributionOfAnswers[6],
      backgroundColor: color7,
      borderColor: color7,
      borderWidth: 1,
    },
  ]

  const options = {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const chartData = {
    labels: items_german,
    datasets: data,
  };

  return (
    <div>
      <h2>Distribution of Answers per Item</h2>
      <p>
        Here you can see the distribution of answers to the single items. If there are items that show a polarization in the answers (many negative and many positve judgements and not much neutral judgements) may help to get deeper insigths concerning aspects of the product that are experienced as quite positive by one subgroup of participants and quite negative by another subgroup.</p>
      <Bar data={chartData} options={options} />
    </div>
  );
}