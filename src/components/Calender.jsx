import React, { useState } from 'react'

const Calender = (props) => {


  return (
     <div className='flex flex-row max-w- flex-wrap'>
        {/* {[...Array(10).keys()].map(() => <CalenderBlock />)}  */}
        {Object.entries(props.slot).map((item , index) =>{ 
           return <CalenderBlock key={index} details={item[1]} getTimeSlots={props.getTimeSlots} />
         })} 
    </div>
  )
}

const CalenderBlock = function(props) {
  const [active, setactive] = useState(false)
   const{date, cost , cost_formatted}=props.details;

  return (
    <div onClick={() => { setactive((prev) => !prev); props.getTimeSlots(date) }} className={`border w-28 text-center  p-3 ${active ? 'bg-red-400' : 'bg-green-400'} `}>
        <h3>{date}</h3>
        <h4>{cost_formatted}</h4>
    </div>
  )
}



export default Calender;