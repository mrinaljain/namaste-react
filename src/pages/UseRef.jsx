import React, { useEffect, useRef } from "react"
function UseRef() {
   // Defining useRef
   const refVar = useRef(0);

   const inputRef = useRef(null);
   function handleClick() {
      //updating value in useReff
      refVar.current = refVar.current + 1;
      console.log(refVar.current);
   }
   useEffect(() => {
      inputRef.current.focus();
   }, []);
   return (
      <div>
         <h1>useRef Hook</h1>
         <hr />
         <input
            type="text"
            ref={inputRef}
            placeholder="Automatic Focus"
         >
         </input>
         <button
            onClick={handleClick}>Increment Ref Variable</button>
         <br />
         <span>Current Value: {refVar.current}</span>
         <ul>
            <li>useRef is like useState but here the rerendering doesnot happen when variable changes</li>
            <li>the value is asscssed via .current method </li>
            <li>Also there is no setter method so value needs to be mutade directly using .current method on object</li>
            <li>It can also be used  as a element selector lik in Javascript ( using ref attribute in JSX) </li>
         </ul>
      </div>
   );
}


export default UseRef