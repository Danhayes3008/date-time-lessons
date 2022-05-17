import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  let today = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Date/Time</h1>
      <p>{today} {clockState}</p>      
    </div>
  )
}

export default Clock