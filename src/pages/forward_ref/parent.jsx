import React, { useRef } from 'react'
import ChildComponent from './child';

function ForwardRef() {
  const inputRef = useRef(null)

  let getInputValue = function(){
    let val = inputRef.current.value;
    console.log(val);
    
  }
  return (
    <>
    <div>ForwardRef</div>
      <button onClick={getInputValue}>getInputValue</button>
      <ChildComponent ref={inputRef}/>
    </>

  )
}

export default ForwardRef;