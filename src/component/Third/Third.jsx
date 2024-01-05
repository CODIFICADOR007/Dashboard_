import React from 'react'
import './Third.css'
import Stats from './Stats/Stats.jsx'
import  Query from './Query/Query.jsx'
import Sales from './Sales/Sales.jsx'
function Third() {
  return (
    <div className='Third'>
        <Sales></Sales>
     <Stats></Stats>
      <Query></Query> 
    </div>
  )
}

export default Third
