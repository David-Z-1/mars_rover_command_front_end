import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';



export default function Database() {

  return (
    <Grid container justifyContent="space-evenly" alignItems = "space-evenly" direction="column" sx={{marginLeft:25, width: 20}}>
    <Button variant="contained" sx={{fontFamily: "Nunito", fontSize:"1.5rem", marginBottom: 2}} 
            onClick={() => window.open('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app', '_blank')}>Database</Button>
            <Button variant="contained" startIcon={<BatteryCharging90Icon sx={{Size: '3rem'}} />} sx={{alignItems: 'center'}}>
            </Button>
    </Grid>
  )
}
