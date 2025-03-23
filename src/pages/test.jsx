// button  click event = > counter.


import React, { useState } from 'react'

function Test() {
   const [count, setCount] = useState(0);
   
    let increment = () =>{
      setCount((prevCount) => prevCount+1 );
   }

  return (
   <>
   <div>
      <button onClick={increment}> Increment</button>
           <h2>{count}</h2>
   </div>
   </>
  )
}

export default Test;