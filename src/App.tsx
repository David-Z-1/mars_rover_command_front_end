import React, { useState } from 'react';
import Web from './Web'
import Grid from './Grid'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App(){ 

  const [status, setStatus] = useState(false);
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Web setStatus={setStatus}/>}/>
        <Route path="/Grid" element={<Grid/>}/>
      </Routes>
    </Router>
  )
}