import React from 'react'
import Coordinates from './components/Coordinates'
import Map from './components/Rover_Map'
import Controller from './components/Mannual'
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
        <div ><Database/></div>
        <div className="mannual_container">
          <div><Controller/></div>
        </div>
      </div>
    )
  }