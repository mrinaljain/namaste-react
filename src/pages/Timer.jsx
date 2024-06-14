import React, { useEffect, useState } from 'react'

function Timer() {
   const [time, setTime] = useState(0);
   const [minute, setMinute] = useState(0);
   const [hour, setHour] = useState(0);

   useEffect(() => {
      let timer = setTimeout(() => {
         setTime(time + 1);
      }, 1000);

      return () => {
         clearInterval(timer);
      }
   }, [time])
   if (time == 60) {
      setMinute(minute + 1);
      setTime(0);
   }
   if (minute == 60) {
      setHour(hour + 1);
      setMinute(0);
   }
   if (hour == 24) {
      setHour(0);
   }
   return (
      <div className='font-extrabold text-6xl flex justify-center items-center h-[100vh]'>
         {hour} : {minute} : {time}
      </div>
   )
}

export default Timer;