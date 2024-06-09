import React, { useCallback, useState } from 'react'
import Child from '../../components/Child';

function UseCallback() {
   const [inputText, setInputText] = useState("");
   const [count, setCount] = useState(0);
   function handleChange(e) {
      setInputText(e.target.value)
   }
   const increment = useCallback(() => {
      setCount(ct => ct + 1);
   }
      , [count]);
   console.log("Parent Build");
   return (
      <div>
         <h1 className='font-extrabold text-2xl'> Use Callback </h1>
         <h4>React.memo</h4>
         <ul>
            <li>React.memo solves the problem of child component getting re-rendered again and again even if not required</li>
            <li>React memo uses technique of props comparision at every render request. if props change then render , if props donot change then do not render</li>
         </ul>
         <h4>React.useCallback</h4>
         <ul>
            <li>useCallback solves the edge case of React.memo which occures in case of non-primitive datatypes like function</li>
         </ul>
         <hr />
         <div className='bg-gray-200 p-3'>
            <h2>Parent Component</h2>
            <input
               type="text"
               value={inputText}
               onChange={handleChange} />
            <button className='border border-black px-2 bg-red-300' onClick={increment}> Increment</button>
            <h4>Count : {count}  Input Text : {inputText}</h4>
            <hr />
            <Child ct={count} incease={increment} />
         </div>

         <hr />


      </div>
   )
}

export default UseCallback