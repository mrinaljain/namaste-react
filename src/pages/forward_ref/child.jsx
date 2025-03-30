import React from 'react'

const ChildComponent = React.forwardRef((props, ref)=>{
   console.log(ref);

   return (
      <div>
         <h1>This Button is being controlled by Parent component vie forward ref</h1>

         <button>On click</button>

         <input ref={ref}  type="text"></input>
      </div>
   ) 
})


export default ChildComponent;