import React, { useState } from 'react'

function Grid({ items }) {
   const [selected, setSelected] = useState({});

   const handleClick = (row, col) => {
      const newSelection = {};

      // Get all 8 neighbors + self
      for (let r = row - 1; r <= row + 1; r++) {
         for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < items && c >= 0 && c < items) {
               newSelection[`${r}-${c}`] = true;
            }
         }
      }

      setSelected((prev) => ({
         // ...prev,
         ...newSelection,
      }));
   };
   const grid = [];

   for (let row = 0; row < items; row++) {
      for (let col = 0; col < items; col++) {
         const key = `${row}-${col}`;
         grid.push(
            <div key={key} className={`w-14 h-14 border border-black ${selected[key] ? "bg-green-500" : "bg-slate-500"}`
            } onClick={() => handleClick(row, col)}>
               {`(${row} ,${col})`}
            </div >
         )
      }
   }


   return <div className={`grid grid-cols-${items}`}>{grid}</div>;

}

export default Grid;