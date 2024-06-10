import React, { useContext } from 'react';
import AppContext from '../../utils/appContext';

function OutsideContextChild() {
   const appContext = useContext(AppContext);
   return (
      <div>
         <h1 className='text-3xl'> OutsideContext  Child</h1>
         <h3>{appContext.name}</h3>
      </div>
   )
}

export default OutsideContextChild;