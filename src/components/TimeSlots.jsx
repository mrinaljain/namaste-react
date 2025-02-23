import React from 'react'

function TimeSlots(props) {
  return (
    <div className='flex flex-wrap gap-5'>
      {Object.values(props.times).map((time, index) => <TimeCard key={time.id} time={time} />)  }
    </div>
  )
}

const TimeCard  = function(props) {
  const { start_date, capacity, cost_formatted , hold} = props.time;
     return (
      <div className='border w-52 text-center bg-red-400  p-2'>
         <h3>{start_date} - {capacity} Available</h3>
         <h4>{cost_formatted} </h4>
         <h5>{ hold} on hold</h5>
      </div>
   )
} 

export default TimeSlots;