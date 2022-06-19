import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Locate_alien  = () => {

const [xaxis, setXaxis] = useState([]); //empty array
const fetchData = async () => {
    const { data } = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/alien_1');
    setXaxis(data);
};
useEffect(() => {     // Trigger the fetchData after the initial render by using the useEffect hook
    fetchData();
}, [xaxis]);

return xaxis;}

export default Locate_alien