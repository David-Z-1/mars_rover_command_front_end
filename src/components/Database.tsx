import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Database() {

  return (
    <Grid container justifyContent="center" alignItems="center">
    <Button variant="contained" sx={{fontFamily: "Nunito"}} onClick={() => window.open('https://esp32-d7b0b-default-rtdb.europe-west1.firebasedatabase.app/', '_blank')}>Database</Button>
    </Grid>
  )
}
