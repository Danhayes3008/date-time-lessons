import React from 'react'

const Countdown = ({hoursMinSecs}) => {
    const { hours = 0, minutes = 0, seconds = 60} = hoursMinSecs;
    const[[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    const ticks = () => {
        if (hrs === 0 && mins === 0 && secs === 0){
            reset()
        } else if(mins === 0 && secs === 0){
            setTime([hrs -1, 59, 59]);
        } else if(secs === 0){
            setTime([hrs, mins -1, 59]);
        } else {
            setTime([hrs, mins, secs -1]);
        }
    };
    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    React.useEffect(() => {
        const timerId = setInterval(() => ticks(), 1000);
        return () => clearInterval(timerId);
    });
  return (
    <div>
        <h2>Countdown:</h2>
        <p className='countdown'>{`${hrs.toString().padStart(1, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
    </div>
  );
}

export default Countdown