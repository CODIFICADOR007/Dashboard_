import React from "react";
import "./Rev.css";
import { Revenue } from "../../Data/Data";
import { Visitor } from "../../Data/Data";

import Chart from "react-apexcharts";
import Vis from "./Vis.jsx";
function Rev() {
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
          "January",
          "February",
          "	March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
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
    <div className="Rev">
      <h3>{Revenue.title}</h3>
      <div className="rowwise">
        <div className="Graphy">
          <Chart
            series={Revenue.series}
            type="area"
           
            options={data.options}
          ></Chart>
        </div>
      
        <Vis></Vis>
      </div>
    </div>
  );
}

export default Rev;
