import React from 'react'

function ChildElement(props) {
   console.log(props.name);


   return (
      <>
         <div>ChildElement</div>
         <h2>{props.name}</h2>
      </>)
}

export default ChildElement