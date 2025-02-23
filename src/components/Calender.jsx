import React from 'react'

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
   const{date, cost , cost_formatted}=props.details;
  return (
     <div onClick={() => props.getTimeSlots(date)} className='border w-28 text-center bg-red-400 p-3'>
        <h3>{date}</h3>
        <h4>{cost_formatted}</h4>
    </div>
  )
}



export default Calender;