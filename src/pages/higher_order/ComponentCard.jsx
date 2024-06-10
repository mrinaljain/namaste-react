import React from 'react'

function ComponentCard(props) {
   return (
      <div className='bg-red-500 w-[400] h-[300] mx-auto rounded-md my-5'>
         <h1>This is normal Component card</h1>
         <h2>{props.data.name}</h2>

      </div>
   )
}

export default ComponentCard;

export const betterComponentCard = (Component) => {
   return function (props) {
      return (
         <div className='relative'>
            <div className='absolute bg-blue-400 rounded-md bottom-0'> Higher Order</div>
            <Component {...props} />
         </div>
      )
   }
}