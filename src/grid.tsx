import React from 'react'
import Coordinates from './components/Coordinates'
import Map from './components/Rover_Map'
import PositionedPopper from './components/Mannual'
// import Input from './components/Input'
import Database from './components/Database'
import Title from './components/Title'
import './grid.css'

export default function Grid () {
  
    return (

      <div className="container">
        <div className="title"><Title/></div>
        <div className="title"></div>
        <div className="item"><Coordinates/></div>
        <div className="map"><Map/></div>
        <div className="item"><Database/></div>
        <div className="mannual_container">
          <div className="item"><PositionedPopper/></div>
          {/* <div className="item"><Input/></div> */}
        </div>
      </div>
    )
  }