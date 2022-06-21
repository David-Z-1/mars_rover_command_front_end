import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Locate_rover  = () => {

    const [roverlocatex, setRoverlocateX] = useState([0]);
    // const [roverlocatex, setRoverlocateX] = useState<number[]>([0]);
    const [roverlocatey, setRoverlocateY] = useState([0]);
    useEffect( ()=>{

      const fetchData = async () => {
          try {
              const res = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/rover_1')
              console.log("fetch original data from firebase: ", res)
              setRoverlocateX((res.data)[0])
              setRoverlocateY((res.data)[1])
              //console.log("fetch x-axis from firebase: ", (res.data)[0])
              //console.log("fetch y-axis from firebase: ", (res.data)[1])
          } 
          catch (error) {
              console.log(error)
          }
      }
      fetchData()
  }, [[roverlocatex,roverlocatey]] )

return [roverlocatex,roverlocatey];}

export default Locate_rover