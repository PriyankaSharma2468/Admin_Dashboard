import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Overview",
            backgroundColor: "skyblue",
            borderColor: "darkblue",
            data: [20, 10, 15, 18, 20, 30, 45,50,37,32,28,30],
        },
    ],
};

function Linechart(){
    return(
        <div className="bg-white border border-secondary rounded">
            < Bar data={data}></Bar>
        </div>
    )
}

export default Linechart;