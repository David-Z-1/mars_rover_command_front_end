import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';


export default function Signal() {
  return (
<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  marginTop={1.5}
  marginLeft={3.5}
>
    <IconButton>
        <SignalCellularAltIcon sx={{color:'#fff',height:70, width:70}}/>
    </IconButton>

    <IconButton sx={{variant:'contained', color:'#76ff03'}}>
        <BatteryCharging90Icon sx={{height:70, width:70}}/>
    </IconButton>
</Grid>
)
}

