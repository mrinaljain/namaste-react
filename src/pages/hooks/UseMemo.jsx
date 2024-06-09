import React, { useState, useMemo } from 'react'

function UseMemo() {
   const [inputText, setInputText] = useState(1)
   const [darkmode, setdarkmode] = useState(true)
   function handleChange(e) {
      setInputText(e.target.value)
   }
   // BEFORE useMemo
   const expensive = () => {
      console.log("Expensive Function Called");
      return inputText * inputText;
   }
   // AFTER useMemo
   const result = useMemo(() => {
      console.log("Expensive Function Called");
      return inputText * inputText;
   }, [inputText]);

   console.log("Rendering....");
   console.log("Input Text", inputText);
   return (
      <div>
         <h1 className='text-2xl font-bold'>useMemo</h1>
         <p>useMemo helps in caching the result of functions during re-renders</p>
         <ul>
            <li> useMemo function accept kr k value return karega</li>
         </ul>
         <input
            type="number"
            className='border border-black'
            value={inputText}
            onChange={handleChange}
         />
         <h1 className='font-extrabold text-7xl'>Input:{inputText}  Square :{result}</h1>
         <br />
         <br />
         <br />
         {/* unique way of using JS in JSX */}
         <div className={"w-10 h-10 rounded-full block " + (darkmode && "bg-green-500")}></div>
         {/* unique way of using JS in JSX */}
         <div className={`w-10 h-10 rounded-full block ${darkmode ? "bg-green-500" : "bg-red-500"}`}></div>
         <button
            className='border border-black'
            onClick={() => setdarkmode(!darkmode)}>
            Other Random  independent Operation
         </button>


      </div>
   )
}

export default UseMemo;