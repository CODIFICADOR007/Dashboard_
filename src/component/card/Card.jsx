import React from 'react'
import Chart from 'react-apexcharts'
import './Card.css'
function Card(props) {
  const data = {
    options: {
      // chart: {
      //   type: "line",
      //   height: "auto",
      // },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,

      },
      toolbar:{
        show:false,
      },
      stroke: {
        curve: "smooth",
        width:2,
        colors: ["#6666ff"],
      },
      

      grid: {
        show: false,
      },
      xaxis: {
        type: "x",
        categories: [
          "",
          "",
          "	",
          "",
          "",
          "",
          "",
          "",
          "",
          "",

        ],},
      yaxis: {
        show: false, // hide y-axis completely
      },
      zoom: {
        enabled: false, // disable zooming
      },
    },
  };
  
  
  
  return (

    <div className="card">

      <div className="container">

        <h4 style={{}}>{props.title}</h4>
        <h5 >{props.number}</h5>
      </div>
      <div className="chartContainer">
        <Chart series={props.series} type='line' options={data.options}></Chart>
      </div>
    </div>
        

  )
}

export default Card
