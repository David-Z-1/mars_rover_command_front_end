import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './coordinates.css'
import Locate_alien from './locate_alien'
import Locate_rover from './locate_rover'

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
    var xaxis = Locate_alien()

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
        <div className='coordinates'>
            <h2 className='title'> Coordinates of Aliens </h2>
            {xaxis.length > 0 ? (
                <div className='content'>
                    {xaxis.map((x) => (
                        <h2> x-axis: {x['x-axis']}; | y-axis: {x['y-axis']}; | type: {x['color']}</h2>
                    ))}
                </div>
            ):( <p className="loading">Loading... </p>)}
            <h2 className='title'> Location of Rover </h2>
                <div className='content'>
                        <h2> x-axis: {roverlocatex}; | y-axis: {roverlocatey};</h2>
                </div>
        </div>
    )
}

export default Coordinates