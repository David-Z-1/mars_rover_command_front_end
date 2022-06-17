import * as React from 'react';
import { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



export default function PositionedPopper() {

  const [disabled, setDisabled] = useState(false);

  const switchHandler = (event) =>{
    setDisabled(event.target.checked);
  }
  
  const handleClick_forward = () => {
    fetch('http://localhost:8000/mannual_instruction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{"distance":50, "direction":0}',})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mannual Switch */}
      <FormGroup>
        <FormControlLabel control={<Switch checked={disabled} onChange={switchHandler}/>} label="Mannual"/>
      </FormGroup>

      <Box sx={{ width: 200}}>
      {/* up arrow button */}
      <Grid container justifyContent="center">
        <Grid item>
          <IconButton disabled={!disabled}>
            <ArrowCircleUpOutlinedIcon onClick={handleClick_forward} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        {/* left arrow button */}
        <Grid item xs={6}>
          <IconButton disabled={!disabled}>
            <ArrowCircleLeftOutlinedIcon onClick={handleClick_forward} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>

        {/* right arrow button  */}
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <IconButton disabled={!disabled}>
            <ArrowCircleRightOutlinedIcon onClick={handleClick_forward} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>
      </Grid>

      {/* bottom arrow button  */}
      <Grid container justifyContent="center">
        <IconButton disabled={!disabled}>
            <ArrowCircleDownOutlinedIcon onClick={handleClick_forward} sx={{fontSize: '3rem'}}/>
          </IconButton>
      </Grid>
      </Box>
    </Box>
  );
}
