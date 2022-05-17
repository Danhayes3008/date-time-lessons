import React, {useEffect, useState} from 'react'

const Resources = () => {
    const [o, setOres] = useState(0);

    useEffect(() => {
        setInterval(() => {
          const mining = 25;
          setOres( o => o+mining);
        }, 5000);
      }, []);
  return (
    <div className='App'>
        <p>ore to smelt: {o.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
    </div>
  )
}

export default Resources
