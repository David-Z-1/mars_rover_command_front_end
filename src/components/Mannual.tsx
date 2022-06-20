import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput'; 
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

import Switch from '@mui/material/Switch';

interface State {
  Speed: string;
}

export default function Controller() {

  const [disabled, setDisabled] = useState(false);

  const switchHandler = (event) =>{
    setDisabled(event.target.checked);
    if (disabled) {
      fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mode.json', {
        method: 'PUT',
        body: '{"mode":0}', // sig 0: auto
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
    }
    else {
      fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mode.json', {
        method: 'PUT',
        body: '{"mode":1}', // sig 1: mannual
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
    }
  }
  
  const handleClick_forward = () => {
    fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mannual_instruction.json', {
        method: 'PUT',
        headers: {
          // 'Access-Control-Allow-Origin':'*',
          // 'Content-Type': 'application/json',
        },
        body: '{"move":1}',
        // mode: 'cors',
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
    // db.ref("user").set({
    //   move : 1
    // }).catch(alert);
  };

  const handleClick_backward = () => {
    fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mannual_instruction.json', {
        method: 'PUT',
        body: '{"move":4}',
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
  };

  const handleClick_left = () => {
    fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mannual_instruction.json', {
        method: 'PUT',
        body: '{"move":2}',
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
  };

  const handleClick_right = () => {
    fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mannual_instruction.json', {
        method: 'PUT',
        body: '{"move":3}',
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
  };

  const handleClick_stop = () => {
    fetch('https://rover-back-end-default-rtdb.europe-west1.firebasedatabase.app/mannual_instruction.json', {
        method: 'PUT',
        body: '{"move":0}',
      })
    .then(response => response.json())
    .then(data => {
        console.log('Transmit Success:', data);})
    .catch((error) => {
        console.error('Error:', error);});
  };

  const [values, setValues] = React.useState<State>({
    Speed: '',
});

const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setValues({ ...values, [prop]: event.target.value });
};

  return (
    <Paper elevation={3} sx={{display:'flex'}}>
    <Box sx={{ display: 'flex', justifyContent: 'flex', margin: 0.8}}>
      {/* Mannual Switch */}
      <FormGroup>
        <FormControlLabel control={<Switch checked={disabled} onChange={switchHandler}/>} label="Mannual" sx={{marginLeft: 1}}/>
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

      <Grid container justifyContent="center" alignItems = "center" direction="row">
        {/* left arrow button */}
        <Grid item>
          <IconButton disabled={!disabled}>
            <ArrowCircleLeftOutlinedIcon onClick={handleClick_left} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>

        <Grid item alignItems = "center">
          <IconButton disabled={!disabled}>
            <StopCircleOutlinedIcon onClick={handleClick_stop} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>

        {/* right arrow button  */}
        <Grid item>
          <IconButton disabled={!disabled}>
            <ArrowCircleRightOutlinedIcon onClick={handleClick_right} sx={{fontSize: '3rem'}}/>
          </IconButton>
        </Grid>
      </Grid>

      {/* bottom arrow button  */}
      <Grid container justifyContent="center">
        <IconButton disabled={!disabled}>
            <ArrowCircleDownOutlinedIcon onClick={handleClick_backward} sx={{fontSize: '3rem'}}/>
          </IconButton>
      </Grid>
      </Box>
    </Box>
    

    <Grid container justifyContent="center" alignItems="center" sx={{marginLeft: 5, marginRight: 5}}>

        {/* Sports Mode switch */}
        <FormControlLabel control={<Switch/>} label="Sports Mode"/>

        <FormControl fullWidth variant="outlined" sx={{marginBottom:0}} id = "speed"> 
          <InputLabel htmlFor="outlined-adornment-speed">Speed</InputLabel>
            <OutlinedInput
                id="outlined-adornment-speed"
                value={values.Speed}
                onChange={handleChange('Speed')}
                endAdornment={<InputAdornment position="end">MPH</InputAdornment>}
                label="Speed"/>  
          </FormControl>

        <Button fullWidth variant="contained" sx={{fontFamily: 'Nunito', fontSize:'1rem', marginBottom:"1rem"}} endIcon={<SendIcon/>}>
            Send
        </Button>
    </Grid> 
    </Paper>
  );
}
