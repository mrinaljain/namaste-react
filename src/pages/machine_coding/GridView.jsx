import React, { useState } from 'react'

function GridView({items}) {
   const [selected, setSelected] = useState({})
   // create a dynamic grid and push it to grid array
   const grid = [];
   const handleClick = (row, col)=>{

      // get the row col and find all the adjecent row and col
      let dummyState  ={};
      for (let r = row-1; r <= row+1; r++) {
         for (let c = col-1; c <= col+1; c++) {
            if(r<= items && c <= items && r >=0 && c >=0){
               dummyState[`${r}-${c}`] = true;
            }
         }
      }
      setSelected(()=>{
         return {...dummyState}
      })

   }
   for (let row = 0; row < items; row++) {
      for (let col = 0; col < items; col++) {
         const key = `${row}-${col}`
         const box = <div className={`border border-black w-16 h-16 gap-0 align-baseline justify-self-start items-start ${selected[key] ? "bg-green-500":"bg-red-500"}`}
         onClick={()=>handleClick(row, col)}
         >{`(${row} , ${col})`}</div>;
         grid.push(box)
         
      }      
   }


  return (
    <div className={`grid grid-cols-${items} w-[30%]`}>{grid}</div>
  )
}

export default GridView;