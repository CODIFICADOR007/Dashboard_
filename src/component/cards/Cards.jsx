import React from 'react'
import './Cards.css'
import { carddata } from '../../Data/Data'
import Card from '../card/Card';
function Cards() {
  return (
    <div className='Cards'>
      {carddata.map((card,id)=>{
        return (
            <div className="parentContainer">
                <Card
                title={card.title}
                number={card.number}
                series={card.series}
                
                />
            </div>
        );
      })}
    </div>
  )
}

export default Cards