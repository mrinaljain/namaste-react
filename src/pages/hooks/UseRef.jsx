import React, { useEffect, useRef, useState } from "react"
function UseRef() {
   const inputRef = useRef(null);

   //Defining using let
   let i = 0;
   // Defining useRef
   const refVar = useRef(0);
   // Defining using state
   const [count, setCount] = useState(0)

   function handleClickLet() {
      i = i + 1;
      console.log("i :", i);
   }
   function handleClick() {
      //updating value in useReff
      refVar.current = refVar.current + 1;
      console.log(refVar.current);
   }
   function handleClickState() {
      setCount(count + 1);
   }
   useEffect(() => {
      inputRef.current.focus();
   }, []);
   return (
      <div>
         <h1>useRef Hook</h1>
         <hr />
         <h2>1. To use as a element selector</h2>
         <input
            type="text"
            ref={inputRef}
            placeholder="Automatic Focus"
         >
         </input>


         <h2>2. To use as a variable which doesnor trigger re-render</h2>
         <div className="bg-purple-300 w-96 h-52">
            <button
               className="border border-green-400 bg-green-300"
               onClick={handleClickLet}>
               Increment Let Variable
            </button>
            <span
               className=" ml-10">
               Current Value: {i}
            </span>


            <button
               className="border border-green-400 bg-green-300"
               onClick={handleClick}>
               Increment Ref Variable
            </button>
            <span
               className=" ml-10">Current Value: {refVar.current}
            </span>


            <button
               className="border border-green-400 bg-green-300"
               onClick={handleClickState}>
               Increment State Variable
            </button>
            <span
               className=" ml-10">
               Current Value: {count}
            </span>
         </div>

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