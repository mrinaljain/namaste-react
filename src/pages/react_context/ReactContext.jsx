import React from 'react'
import ContextChild from './ContextChild';
import AppContext from '../../utils/appContext';
import OutsideContextChild from './OutsideContextChild';
function ReactContext() {
   return (
      <div className=''>
         <h1 className='text-3xl'>React Context</h1>
         <AppContext.Provider value={{ name: "Mrinal Jain" }}>
            <ContextChild />
         </AppContext.Provider>
         <OutsideContextChild />
         <hr />
         <ul>
            <li>When there's no Provider, the defaultValue argument is used for the function createContext. This is helpful for testing components in isolation without wrapping them, or testing it with different values from the Provider.</li>
         </ul>
      </div >
   )
}

export default ReactContext;