import React, { useCallback, useEffect, useState } from 'react'
import countries from '../utils/countries';
function SearchPage() {
   // debounce :
   // add certain  delay  and if a function call happens in that delay then reset the delay
   const [searchResults, setsearchResults] = useState([])
   const [input, setInput] = useState("");

   // function debouncedSearch(normalFn, delay) {
   //    let timer;
   //    return (...args) => {
   //       if (timer) clearTimeout(timer);
   //       timer = setTimeout(() => {
   //          normalFn(...args);
   //       }, delay);
   //    };
   // }

   useEffect(() => {
      let timer = setTimeout(() => {
         searchCountry(input);
      }, 5000);
     return () => {
        clearTimeout(timer);
     }
   }, [input])
   
   //  event
   function searchCountry(input) {
      if (input.length < 3) return;
      let searchResults = countries.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()) );
      setsearchResults((oldsearchResults)=>{
         if (oldsearchResults !== searchResults){
            return searchResults;
         } else{
            return oldsearchResults;
         }
      })
   }
   return (
      <>
         <div>SearchPage</div>
         <input type="text" className='border-s-violet-600 bg-slate-200' onKeyUp={(e)=>setInput(e.target.value)} />

         <div className=''>
            <ul>
               {searchResults.map((country, index) => {
                  return <li key={index}>{country.name}</li>;
               })}
            </ul>

         </div>
      </>
   )
}

export default SearchPage;