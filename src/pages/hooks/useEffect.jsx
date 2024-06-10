import React, { useState, useEffect } from 'react'

function UseEffect() {
   const [dependency, setDependency] = useState("");

   const asyncFunction = async () => {
      let p = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("Promise resolved");
         }, 5000);
      });
      const result = await p;
      setDependency(result);
   }
   useEffect(() => {
      asyncFunction()
      // Cleaneup function
      return () => {
         console.log("Unmount/ Rerender");
      }
   }, [dependency])

   return (
      <div>
         <h1 className='text-3xl'>useEffect</h1>

         <p>{dependency}</p>
      </div>
   )
}

export default UseEffect;