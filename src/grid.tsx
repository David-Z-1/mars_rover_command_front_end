import React from 'react'
import Coordinates from './components/Coordinates'
import Map from './components/Rover_Map'
import PositionedPopper from './components/Mannual'
import Input from './components/Input'
import './grid.css'

export default function Grid () {
  
    return (
      <div className="container">
        <div className="item"><Coordinates/></div>
        <div className="map"><Map/></div>
        <div className="item">3</div>
        <div className="mannual_container">
          <div className="item">2</div>
          <div className="item"><PositionedPopper/></div>
          <div className="item"><Input/></div>
        </div>
      </div>
    )
  }