import React, { useState } from "react";

function Counter() {
   const [count, setCount] = useState(0);

   const add = () => {
      setCount((currentCount) => {
         return currentCount + 1;
      })
   }
   const substract = () => {
      setCount((currentCount) => {
         return currentCount - 1;
      })
   }
   return (
      <div>
         <h1>Counter APP </h1>
         <div>
            <button onClick={substract}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
         </div>
         <ul>
            <li>State variable will re render the component every time the value changes</li>
            <li>useState is used to create a variable(state) with super powers of React</li>
         </ul>
      </div>
   );
}

export default Counter;
