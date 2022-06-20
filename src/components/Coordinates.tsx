import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import './coordinates.css';
import Locate_alien from './locate_alien';
import Locate_rover from './locate_rover';

const Coordinates = () => {
  /*                  -----------get location of aliens-----------                  */
//   const [xaxis, setXaxis] = useState([]); //empty array
//   const fetchData = async () => {
//     const { data } = await axios.get('http://localhost:8000/alien');
//     setXaxis(data);
//   };
//   useEffect(() => {     // Trigger the fetchData after the initial render by using the useEffect hook
//     fetchData();
//   }, [xaxis]);
    var xaxis = (Locate_alien())
    console.log("location of alien recieved: ", xaxis)

  /*                  ------------get location of rover------------                  */
//   const [roverlocatex, setRoverlocateX] = useState([]);
//   const [roverlocatey, setRoverlocateY] = useState([]);
//   useEffect( ()=>{
//     const fetchData = async () => {
//         try {
//             const res = await axios.get('http://localhost:8000/rover')
//             setRoverlocateX((res.data)[0]['x-axis'])
//             setRoverlocateY((res.data)[0]['y-axis'])
//             console.log((res.data)[0]['y-axis'])
//             console.log((res.data)[0]['x-axis'])
//         } 
//         catch (error) {
//             console.log(error)
//         }
//     }
//     fetchData()
// }, [] )
    var roverlocate = Locate_rover()
    var roverlocatex = roverlocate[0]
    var roverlocatey = roverlocate[1]

/*         ------------display locations in x & y coordinates------------           */
    return (
        // <div className='coordinates'>
        //     <h2 className='title'> Alien Position </h2>
        //     {xaxis.length > 0 ? (
        //         <div className='content'>
        //             {xaxis.map((x) => (
        //                 <h2> x-axis: {x['x-axis']} | y-axis: {x['y-axis']} | type: {x['color']}</h2>
        //             ))}
        //         </div>
        //     ):( <p className="loading">Loading... </p>)}
        //     <h2 className='title'> Rover Position </h2>
        //         <div className='content'>
        //                 <h2> x-axis: {roverlocatex} | y-axis: {roverlocatey}</h2>
        //         </div>
        // </div>
        <Paper elevation={3} sx={{ height:350, marginLeft: 8, marginRight: 30}}>
            <Grid container alignItems = "center" direction="row" sx={{marginLeft: 1}}>
                <Grid>
                <Avatar alt="Alien" src="image.png" />
                </Grid>
                
                <Grid sx={{marginLeft: 1}}>
                <h2>Alien Position: </h2>
                </Grid>   
            </Grid>
            <Grid sx={{marginLeft: 1}}>
                {xaxis.length > 0 ? (
            <div>
                        {xaxis.map((x) => (
                            <h2> x-axis: {x['x-axis']} | y-axis: {x['y-axis']} | type: {x['color']}</h2>
                        ))}
                </div>

                ):( <h2 className="loading">Loading... </h2>)}
            </Grid>


            <Grid container alignItems = "center" direction="row" sx={{marginLeft: 1}}>
                  <Grid>
                <Avatar alt="Alien" src="image.png" />
                </Grid> 
                
                <Grid sx={{marginLeft: 1}}>
                <h2>Rover Position: </h2>
                </Grid>
            
            </Grid>
            <Grid sx={{marginLeft: 1, marginBottom: 5}}>
                <h2> x-axis: {roverlocatex} | y-axis: {roverlocatey}</h2>
                </Grid>

        </Paper>

    )
}

export default Coordinates