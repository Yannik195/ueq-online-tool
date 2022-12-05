
export default function ResultsTable(props) {
  const { results } = props;
  let items_german = [["unerfreulich", "erfreulich"], ["unverständlich", "verständlich"], ["kreativ", "phantasielos"], ["leicht zu lernen", "schwer zu lernen"], ["wertvoll", "minderwertig"], ["langweilig", "spannend"], ["uninteressant", "interessant"], ["unberechenbar", "voraussagbar"], ["schnell", "langsam"], ["originell", "konventionell"], ["behindernd", "unterstützend"], ["gut", "schlecht"], ["kompliziert", "einfach"], ["abstoßend", "anziehend"], ["herkömmlich", "neuartig"], ["unangenehm", "angenehm"], ["sicher", "unsicher"], ["aktivierend", "einschläfernd"], ["erwartungskonform", "nicht erwartungskonform"], ["ineffizient", "effizient"], ["übersichtlich", "verwirrend"], ["unpragmatisch", "pragmatisch"], ["aufgeräumt", "überladen"], ["attraktiv", "unattraktiv"], ["sympathisch", "unsympathisch"], ["konservativ", "innovativ"]]

  const tableRows = items_german.map((item, index) => {
    const resultNumbers = results.map((result) => result[index]);
    const mean = resultNumbers.reduce((a, b) => a + b, 0) / resultNumbers.length;
    const variance = resultNumbers.reduce((a, b) => a + (b - mean) ** 2, 0) / resultNumbers.length;
    const standardDeviation = Math.sqrt(variance);

    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{/* Add value for "number" column here */}</td>
        <td>{mean.toFixed(2)}</td>
        <td>{variance.toFixed(2)}</td>
        <td>{standardDeviation.toFixed(2)}</td>
        <td>{results.length}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{/* Add value for "scale" column here */}</td>
        <td>{/* Add value for "color" column here */}</td>
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Number</th>
          <th>Mean</th>
          <th>Variance</th>
          <th>Standard Deviation</th>
          <th>No</th>
          <th>Left</th>
          <th>Right</th>
          <th>Scale</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};