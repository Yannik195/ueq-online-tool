import styles from "./ResultsTable.module.css"
export default function ResultsTable(props) {
  const { results } = props;
  let items_german = [["unerfreulich", "erfreulich"], ["unverständlich", "verständlich"], ["kreativ", "phantasielos"], ["leicht zu lernen", "schwer zu lernen"], ["wertvoll", "minderwertig"], ["langweilig", "spannend"], ["uninteressant", "interessant"], ["unberechenbar", "voraussagbar"], ["schnell", "langsam"], ["originell", "konventionell"], ["behindernd", "unterstützend"], ["gut", "schlecht"], ["kompliziert", "einfach"], ["abstoßend", "anziehend"], ["herkömmlich", "neuartig"], ["unangenehm", "angenehm"], ["sicher", "unsicher"], ["aktivierend", "einschläfernd"], ["erwartungskonform", "nicht erwartungskonform"], ["ineffizient", "effizient"], ["übersichtlich", "verwirrend"], ["unpragmatisch", "pragmatisch"], ["aufgeräumt", "überladen"], ["attraktiv", "unattraktiv"], ["sympathisch", "unsympathisch"], ["konservativ", "innovativ"]]

  function extractValueTransformed(results) {
    return results.map(result => result.valuesTransformed);
  }

  const valueTransformed = extractValueTransformed(results);

  const tableRows = items_german.map((item, index) => {
    const resultNumbers = valueTransformed.map((result) => result[index]);
    const mean = resultNumbers.reduce((a, b) => a + b, 0) / resultNumbers.length;
    const variance = resultNumbers.reduce((a, b) => a + (b - mean) ** 2, 0) / resultNumbers.length;
    const standardDeviation = Math.sqrt(variance);

    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{mean.toFixed(2)}</td>
        <td>{variance.toFixed(2)}</td>
        <td>{standardDeviation.toFixed(2)}</td>
        <td>{results.length}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    )
  });

  return (
    <div className="scroll">
      <h2>Results</h2>
      <p>The table shows the mean, variance, and standard deviation for each item in the survey. The mean is the average value of all responses for a given item. The variance is a measure of how spread out the responses are for a given item. A high variance indicates that the responses are more spread out, while a low variance indicates that the responses are more clustered around the mean. The standard deviation is a measure of the dispersion of the responses around the mean. It is calculated as the square root of the variance. A high standard deviation indicates a higher level of dispersion, while a low standard deviation indicates a lower level of dispersion. These values can help to understand the distribution of responses for each item and identify any outliers or patterns in the data.</p>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Mean</th>
            <th>Variance</th>
            <th>Std. Dev.</th>
            <th>No</th>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};