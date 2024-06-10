import React from 'react'
import ComponentCard from './ComponentCard';
import { betterComponentCard } from './ComponentCard';

function HigherOrderComponent() {

   const UpdatedCard = betterComponentCard(ComponentCard);
   return (
      <div >
         <h1>Higher Order component</h1>
         <div className='flex flex-wrap'>
            <ComponentCard data={{ name: "Mrinal", city: "Indore" }} />
            <ComponentCard data={{ name: "sunil", city: "Delhi" }} />
            <ComponentCard data={{ name: "karan", city: "lonavala" }} />
            <UpdatedCard data={{ name: "Updated", city: "lonavala" }} />
         </div>
      </div>
   )
}

export default HigherOrderComponent;