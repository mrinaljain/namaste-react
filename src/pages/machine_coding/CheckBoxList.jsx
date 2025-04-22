import React, { useEffect, useState } from 'react'

export default function CheckBoxList({ items }) {
   const [checkBoxes, setCheckBoxes] = useState([
      { id: 1, label: "Item A", checked: false },
      { id: 2, label: "Item B", checked: false },
      { id: 3, label: "Item C", checked: true },
   ])


   function handleToggle(id) {

      const updated = checkBoxes.map((item) =>
         item.id === id ? { ...item, checked: !item.checked } : item
      );
      // Sort: unchecked first, checked later
      updated.sort((a, b) => a.checked - b.checked);
      setCheckBoxes(updated);
   }

   const checkBoxesArr = checkBoxes.map((item, index) => <div key={item.id}>
      <input type="checkbox" name="" id={item.id} onChange={() => handleToggle(item.id)}
         checked={item.checked} />
      <label htmlFor={item.id}>{item.label}</label>
   </div>);







   return (

      <>
         <div>CheckBoxList</div>

         <div className=''>
            {checkBoxesArr}
         </div>
      </>


   )
}

