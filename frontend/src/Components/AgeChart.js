import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Pie} from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);
export default function AgeChart({age}) {
    let data = {
        labels: ["18-23", "24-29", "30-35", "36-41", "42-47", "48+"],
    setDatasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
    }

    const options = {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 100,
            right: 100
          }
        }
      }

    return (
        <div>
            <h1>Age of the subjects</h1>
            <Pie data={data} options={options} />
        </div>
    )
}



/*
export const data = {
    labels: ["18-23", "24-29", "30-35", "36-41", "42-47", "48+"],
    setDatasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
};

const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
}

export default function AgeChart() {
    return (
      
        <Pie data={data} options={options} />

    );
}
*/