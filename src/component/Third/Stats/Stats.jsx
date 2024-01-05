import React from 'react'
import { Revenue,stat } from '../../../Data/Data'
import Chart from "react-apexcharts";
import './Stats.css'
function Stats() {
  
  const data = {
    options: {
      chart: {
        type: "area",
        // height: "100%", // Set the desired height here
        // width: "500px",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
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
          "1",
          "2",
          "	3",
          "4",
          "5",
          "6",
          "7",
          "8",

        ],
        width: '100%',
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
    <div className='Stat'>
          <Chart
            series={Revenue.series}
            type="area"
           
            options={data.options}
          ></Chart>
          <div className='statitem'>
           {stat.map((items,id)=>{
            return (
            <div>
             <items.icon/>
              <span className='dist'>{items.title}</span>
              <button className='butt'style={{ background: items.color1 }}>{items.price}</button>
            </div>);
           })}
          </div>
        </div>
  )
}

export default Stats
