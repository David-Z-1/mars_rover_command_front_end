import React from 'react'
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput'; 
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';

interface State {
    distance: string;
    angle: string;
  }

export default function Input() {

    const [values, setValues] = React.useState<State>({
        distance: '',
        angle: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      
    
  return (
    <Grid container justifyContent="center" alignItems="center">
        <FormControl fullWidth variant="outlined" sx={{marginBottom:"2rem"}} id = "distance"> 
          <InputLabel htmlFor="outlined-adornment-distance">Distance</InputLabel>
            <OutlinedInput
                id="outlined-adornment-distance"
                value={values.distance}
                onChange={handleChange('distance')}
                label="Distance"/>  
          </FormControl>

        <FormControl fullWidth variant="outlined" sx={{marginBottom:"2rem"}}>
          <InputLabel htmlFor="outlined-adornment-angle">Angle</InputLabel>
            <OutlinedInput
                id="outlined-adornment-angle"
                value={values.angle}
                onChange={handleChange('angle')}
                label="Angle"/>
        </FormControl>

        <Button fullWidth variant="contained" sx={{fontFamily: 'Nunito', fontSize:'1rem', marginBottom:"2rem"}} endIcon={<SendIcon/>}>
            Send
        </Button>
    </Grid> 
  )
}
