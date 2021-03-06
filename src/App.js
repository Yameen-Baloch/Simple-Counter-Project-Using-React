import React, { useState } from 'react';

const App = () =>{

  const [count, setCount] = useState(0)

  const incNum = () => {
    setCount(count+1)
  };

  const decNum = () =>{
    setCount(count-1)
  }
  
  return(
    <>
    <h1>
      {count}
    </h1>
    <button className='inc_Button' onClick={incNum}>Increase Number</button>
    <button className='dec_Button' onClick={decNum}>Decrease Number</button>
    </>
  )
}

export default App;