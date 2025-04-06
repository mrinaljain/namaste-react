import React, { useEffect, useRef, useState } from "react";

function Counter() {
   const [count, setCount] = useState(0);
   const btnRef = useRef(null)
   const add = () => {
      setCount((currentCount) => {
         return ++currentCount;
      })
   }
   const substract = () => {
      setCount((currentCount) => {
         return currentCount - 1;
      })
   }

   useEffect(() => {
      setInterval(() => {
         btnRef.current?.click();
      }, 5000);
   }, [])

   return (
      <div>
         <h1>Counter APP </h1>
         <div>
            <button onClick={substract}>-</button>
            <span>{count}</span>
            <button ref={btnRef} onClick={add}>+</button>
         </div>
         <ul>
            <li>State variable will re render the component every time the value changes</li>
            <li>useState is used to create a variable(state) with super powers of React</li>
         </ul>
      </div>
   );
}

export default Counter;
