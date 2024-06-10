import React, { useState } from 'react'
import { createPortal } from 'react-dom';
function Portal() {
   const [modalVisibility, setModalVisibility] = useState(false);
   return (
      <div>
         <h1>Portal</h1>

         <hr />

         <button
            onClick={() => setModalVisibility(true)}
            class="border bg-red-400 rounded-sm shadow-md">Open Modal</button>
         {modalVisibility && createPortal(<Modal closeModal={setModalVisibility} />, document.body, "uniqueKey")}

      </div>
   )
}

export default Portal;


function Modal({ closeModal }) {
   return (
      <div className='absolute w-28 h-56 bg-green-600 left-auto right-auto'>
         <h3>This is a Modal child</h3>

         <button
            onClick={() => closeModal(false)}
            class="border bg-red-400 rounded-sm shadow-md">Close Modal</button>
      </div>
   )
}

// Parameters
// children: Anything that can be rendered with React, such as a piece of JSX(e.g. < div /> or < SomeComponent />), a Fragment(<>...</>), a string or a number, or an array of these.

//    domNode: Some DOM node, such as those returned by document.getElementById().The node must already exist.Passing a different DOM node during an update will cause the portal content to be recreated.

// optional key: A unique string or number to be used as the portal’s key.