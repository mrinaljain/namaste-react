import React from 'react'

function Children(props) {
   return (
      <div class="p-4 bg-red-300 h-auto">
         <h2>Childern Section</h2>
         {props.children}
      </div>
   )
}

export default Children