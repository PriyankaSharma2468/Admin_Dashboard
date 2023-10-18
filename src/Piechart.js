import React from "react";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
    labels:["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets : [
        {
            label:"# of Votes",
            data: [12, 22, 4, 46, 8, 6],
            bordercolor: [
                'pink',
                '#17a2b8',
                '#ffc107',
                'rgb(87, 185, 96)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            backgroundcolor: [
                'rgba(255, 159, 64, 1)',
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
function Piechart(){
    return(
        <>
          <div className="header">
            <b>Customers</b>
            <div className="links">
            </div>
          </div>
          <Doughnut data ={data}/>
        </>
    )
};
export default Piechart;