import React, { useEffect, useState } from 'react'
import entries from '../../utils/data';
function Table() {
   const [tableData, setTableData] = useState(entries)
   const [filteredTable, setfilteredTable] = useState([])
   let table = []
   function renderTable(data) {
      for (let i = 0; i < data.length; i++) {
         // rows 
         let row = <tr key={i}>{Object.entries(data[i]).map(([key, value]) => <td>{`${value}`}</td>)}</tr>

         table.push(row);
      }
      setfilteredTable(table)
    }
   useEffect(() => {
      renderTable(tableData)

      return () => {
         // second
      }
   }, [tableData])


   

   function handleSearch(e) {
      console.log(e.target.value);
      let filtered = tableData.filter((item) => item["label"].toLowerCase().includes(e.target.value) );
      renderTable(filtered)

      // setfilteredTable(filtered);



   }
   return (
      <>
         <h1>Table</h1>
         <input className='bg-green-300 border border-rose-400' onChange={handleSearch}></input>
         <table className='bg-red-400'><tbody>{filteredTable}</tbody></table>
      </>

   )
}

export default Table;