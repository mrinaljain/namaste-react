import React from 'react'
import { useContext } from 'react';
import appContext from '../../utils/appContext';

function ContextChild() {

   const first = useContext(appContext);
   return (
      <div>
         <h1 className='text-3xl'> Context Child</h1>
         <h3>{first.name}</h3>
      </div>
   )
}

export default ContextChild;