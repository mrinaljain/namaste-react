import React from 'react'

function HOC(Component) {
  
   return (props)=>(
      <>
         <div>HOC</div>
         <Component {...props}/>
      </>
      
   )
}

export default HOC