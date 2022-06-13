import React from 'react'
import Coordinates from './components/Coordinates'
import Map from './components/Rover_Map'
import './grid.css'

export default function Grid () {
  
    return (
  
      <div className="container">
        <div className="item"><Coordinates/></div>
        <div className="item"><Map/></div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
      </div>
    )
  }