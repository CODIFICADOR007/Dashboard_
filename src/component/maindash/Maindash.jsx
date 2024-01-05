import React from 'react'
import Nav from './Nav'
import './maindash.css'
import Cards from '../cards/Cards'
import Rev from '../Graph/Rev'
import Third from '../Third/Third'
import Table from '../Table/Table.jsx'
// import { Table } from 'react-bootstrap'
function Maindash() {
  return (
   <div className='MainDash'>

    <Nav></Nav>
    <Cards></Cards>
    <Rev></Rev>
    <Third></Third>
    <Table></Table>


   </div>
  )
}

export default Maindash
