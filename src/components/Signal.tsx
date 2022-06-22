import React from 'react';
import IconButton from '@mui/material/IconButton';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


export default function Signal() {
  return (
    <IconButton>
        <SignalCellularAltIcon sx={{color:'#fff',height:70, width:70, marginLeft:63.5, marginTop:2}}/>
    </IconButton>
  )
}

