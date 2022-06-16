import * as React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

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
    // const [PostId, setPostId] = useState<string[]>([]);
    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         // headers: { 'Content-Type': 'application/json' },
    //         // body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    //     };
    //     fetch('http://localhost:8000/mannual_instruction', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // });

  return (
    <Box sx={{ width: 500 }}>
      {/* <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper> */}
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick_forward}>forward</Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick_forward}>left</Button>
        </Grid> 
      </Grid>
      <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick_forward}>right</Button>
          </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick_forward}>bottom</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
