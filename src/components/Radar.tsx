import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Radar  = () => {

const [axis, setAxis] = useState([]); //empty array
const fetchData = async () => {
    const { data } = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/radar');
    setAxis(data);
};
useEffect(() => {     // Trigger the fetchData after the initial render by using the useEffect hook
    fetchData();
}, [axis]);

return axis;}

export default Radar