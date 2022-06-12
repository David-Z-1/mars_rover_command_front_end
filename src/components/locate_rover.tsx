import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Locate_rover  = () => {

    const [roverlocatex, setRoverlocateX] = useState([0]);
    // const [roverlocatex, setRoverlocateX] = useState<number[]>([0]);
    const [roverlocatey, setRoverlocateY] = useState([0]);
    useEffect( ()=>{

      const fetchData = async () => {
          try {
              const res = await axios.get('http://localhost:8000/rover')
              setRoverlocateX((res.data)[0]['x-axis'])
              setRoverlocateY((res.data)[0]['y-axis'])
            //   console.log((res.data)[0]['y-axis'])
            //   console.log((res.data)[0]['x-axis'])
          } 
          catch (error) {
              console.log(error)
          }
      }
      fetchData()
  }, [[roverlocatex,roverlocatey]] )

return [roverlocatex,roverlocatey];}

export default Locate_rover