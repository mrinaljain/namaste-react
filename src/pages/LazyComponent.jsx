import React from 'react'

function LazyComponent() {
   return (
      <div>
         <h1>This is a Lazy component</h1>
         <ul>
            <li>iski script tag alag se load hogi jab bhi ye page load ho rah hai</li>
         </ul>
      </div>
   )
}

export default LazyComponent;