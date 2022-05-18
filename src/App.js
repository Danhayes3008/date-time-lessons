import './App.css';
import React from 'react';

import Clock from './components/time'
import Countdown from './components/countdown'
import Resources from './components/resources'

function App() {
  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  return (
    <div className="App">
         <Clock />
         <Countdown hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
