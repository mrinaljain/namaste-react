import React from 'react'
import ContextChild from './ContextChild';
import OutsideContextChild from './OutsideContextChild';
import { appContext } from './appContext';
function ReactContext() {
   return (
      <div className=''>
         <h1 className='text-3xl'>React Context</h1>
         <appContext.Provider value={{ name: "Mrinal Jain" }}>
            <ContextChild />
         </appContext.Provider>
         <OutsideContextChild />
         <hr />
         <ul>
            <li>When there's no Provider, the defaultValue argument is used for the function createContext. This is helpful for testing components in isolation without wrapping them, or testing it with different values from the Provider.</li>
         </ul>
      </div >
   )
}

export default ReactContext;