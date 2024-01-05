import React from 'react'
import { Visitor } from "../../Data/Data";
import Chart from "react-apexcharts";
import './Vis.css'
function Vis() {
    const data = {
        options: {
          chart: {
            type: "bar",
            height: 4000, // Set the desired height here
            width: '100%',

            
          },
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            
            color: "#000",
            opacity: 0.35,
          },
          dataLabels: {
            enabled: false, // hide data labels
          },
          stroke: {
            curve: "smooth",
        
            colors: ["#6666ff"],
          },
          tooltip: {},
          grid: {
            show: false,
          },
          xaxis: {
            type: "Month",
            categories: [
              "Monday",
              "Tuesday",
              "	Wednesday",
              "Thrusday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
          yaxis: {
            show: true, // hide y-axis completely
          },
          zoom: {
            enabled: true, // disable zooming
          },
        },
      };
      


  return (
    <div className='Vis'>
    <h3 className="mar">{Visitor.title}</h3>
    <Chart series={Visitor.series} type='bar'options={data.options}></Chart>
    </div>
  )
}

export default Vis
