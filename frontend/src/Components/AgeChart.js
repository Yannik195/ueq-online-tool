import React from "react";
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend, } from "chart.js";
import {Pie} from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend);

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

export default function AgeChart({ results }) {
 console.log("Results", results)
 let unterachtzehn = 0;
 let achtzehn = 0;
 let fünfundzwanzig = 0;
 let dreißig = 0;
 let fünfunddreisig = 0;
 let vierzig = 0;
 let fünfundvierzig = 0;
 let fünfzig = 0;
 let fünfundfünfzig = 0;
 let oversechsig = 0;

 let dataAge;
    for (const iterator of results) {
      dataAge = iterator.subject.age
  
  if(dataAge<18){
  unterachtzehn += 1
  }     
  else if(dataAge>=18 && dataAge<=24){
    achtzehn += 1
  } 
  else if (dataAge>=25 && dataAge<=29) {
    fünfundzwanzig += 1
  }else if (dataAge>=30 && dataAge<=34) {
    dreißig += 1
  }
  else if (dataAge>=35 && dataAge<=39) {
    fünfunddreisig += 1
  }
  else if (dataAge>=40 && dataAge<=44) {
    vierzig += 1
  }
  else if (dataAge>=45 && dataAge<=49) {
    fünfundvierzig += 1
  }
  else if (dataAge>=50 && dataAge<=54) {
    fünfzig += 1
  }
  else if (dataAge>=55 && dataAge<=59) {
    fünfundfünfzig += 1
  }
  else if (dataAge>=60) {
    oversechsig += 1
  }
  }
 
  let chartData = { 
    labels: ["-18","18-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60+"],
    datasets: [
      {
        label: "# of Votes",
        data: [unterachtzehn, achtzehn, fünfundzwanzig, dreißig, fünfunddreisig, vierzig, fünfundvierzig, fünfzig, fünfundfünfzig, oversechsig],
        backgroundColor: [
          "rgba(255, 175, 255, 0.2)",
          "rgba(20, 100, 9, 0.2)",
          "rgba(20, 255, 255, 0.2)",
          "rgba(153, 100, 9, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 175, 255, 1)",
          "rgba(20, 100, 9, 1)",
          "rgba(20, 255, 255, 1)",
          "rgba(153, 100, 9, 1)",
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

    return (
        <div>
            <h1>Age of the subjects</h1>
            <Pie data={chartData}  />
        </div>
    )
}