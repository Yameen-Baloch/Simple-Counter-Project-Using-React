import React, { useState } from 'react';

const App = () =>{

  let state = useState();

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
    <button className='inc_Button' onClick={incNum}>Click Me.</button>
    <button className='dec_Button' onClick={decNum}>Click Me.</button>
    </>
  )
}

export default App;