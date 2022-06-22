import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';



export default function Database() {

  return (
    <Grid 
    container 
    justifyContent="space-evenly" 
    alignItems = "space-evenly" 
    direction="column" 

    sx={{marginTop:2, marginLeft:20, width: 30}}>

    <Button variant="contained" sx={{fontFamily: "Nunito", fontSize:"1.5rem",    marginTop:3,  marginBottom: 3, height: 50, width: 300}} 
            onClick={() => window.open('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app', '_blank')}>Database</Button>

    <Button variant="contained" sx={{fontFamily: "Nunito", fontSize:"1.5rem", marginBottom: 2, height: 50}} 
            onClick={() => window.open('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app', '_blank')}>3D Areography</Button>

    </Grid>
  )
}
