import React from 'react'
import './Query.css'
import { Revenue,stat } from '../../../Data/Data'
import Chart from "react-apexcharts";
function Query() {
  return (
    <div className='query'>
      <span className='heading'>Student Queries</span>
      <div className='queryitem'>
           {stat.map((items,id)=>{
            return (
            <div>
             <items.icon/>
              <span className='dist'>{items.title}</span>
              <button className='butt'style={{ background: items.color1 }}>{items.price}</button>
              <button className='butt'style={{ background: items.color2 }}>{items.price}</button>
            </div>);
           })}
          </div>
    </div>
  )
}

export default Query
