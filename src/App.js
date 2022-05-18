import './App.css';
import React from 'react';

import Clock from './components/time'
import Countdown from './components/countdown'

function App() {
  const hoursMinSecs = {hours:1, minutes: 0, seconds: 0}
  return (
    <div className="App">
      <div className="card">
        <Clock />
        <Countdown hoursMinSecs={hoursMinSecs}/>
      </div>
    </div>
  );
}

export default App;
