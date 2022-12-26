import React from 'react';
import { ScaleMeansVarianceChart } from './ScalesMeanVarianceChart';

const ScalesMeansVarianceTable = ({ results }) => {
  const {
    attractiveness,
    perspicuity,
    efficiency,
    dependability,
    stimulation,
    novelty
  } = results;

  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  const variance = arr => {
    const m = mean(arr);
    return mean(arr.map(x => (x - m) ** 2));
  };

  return (
    <div>
      <p>The table of attractiveness, perspicuity, efficiency, dependability, stimulation and novelty displays the mean and variance for each scale. The mean represents the average rating given by participants for each scale, with values ranging from -3 (horribly bad) to 3 (extremely good). Values between -0.8 and 0.8 represent a more or less neutral evaluation, while values greater than 0.8 represent a positive evaluation and values less than -0.8 represent a negative evaluation. The variance shows the spread of the ratings around the mean, with higher variance indicating a greater range of ratings. It is important to note that the observed values may not exceed +2 or fall below -2 due to the calculation of means over a range of different persons with different opinions and answer tendencies. The table can be used to detect outliers in the evaluations and to identify any issues with item interpretation by a higher number of participants.</p>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Mean</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Attractiveness</td>
            <td>{mean(attractiveness).toFixed(2)}</td>
            <td>{variance(attractiveness).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Perspicuity</td>
            <td>{mean(perspicuity).toFixed(2)}</td>
            <td>{variance(perspicuity).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Efficiency</td>
            <td>{mean(efficiency).toFixed(2)}</td>
            <td>{variance(efficiency).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Dependability</td>
            <td>{mean(dependability).toFixed(2)}</td>
            <td>{variance(dependability).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Stimulation</td>
            <td>{mean(stimulation).toFixed(2)}</td>
            <td>{variance(stimulation).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Novelty</td>
            <td>{mean(novelty).toFixed(2)}</td>
            <td>{variance(novelty).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScalesMeansVarianceTable;
