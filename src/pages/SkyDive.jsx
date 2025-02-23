import React, { useEffect, useState } from "react"
import Calender from "../components/Calender";
import TimeSlots from "../components/TimeSlots";
import { getDatesAvailability, getTimeAvailability } from "../utils/constants";


const SkyDive = function(){
   const [slots, setSlots] = useState({});
   const [times, setTimes] = useState({});
   const [currentDate, setcurrentDate] = useState()
   const getDates = async function(){
      let response = await fetch(getDatesAvailability, {
         method: "GET"
      });
      let data = await response.json();
      setSlots(data.slots);
      
   }

   const getTimeSlots = async function(date){
      setcurrentDate(date)
      let updatedDateArray = date.split("-").reverse(); 
      // Swap first two elements without affecting the original array
      [updatedDateArray[0], updatedDateArray[1]] = [updatedDateArray[1], updatedDateArray[0]];
    
      
      updatedDateArray[0] =  updatedDateArray[0].length === 1 ? '0' + updatedDateArray[0] : updatedDateArray[0];
      updatedDateArray[1] = updatedDateArray[1].length === 1 ? '0' + updatedDateArray[1] : updatedDateArray[1];
      
      let updatedDate = updatedDateArray.join("/");
      
      let response = await fetch(`${getTimeAvailability}date=${updatedDate}`, {
         method: "GET"
      });
      let data = await response.json();
      setTimes(data.slots);
   
      
   }

   useEffect(() => {
      getDates();
     return () => {     }
   }, [])
   
   return (
      <div className="text-center flex flex-col items-center">
         <h1 className="border-l-red-300 text-red-500">
            Welcome to Dubai SkyDive
         </h1>
         {Object.keys(slots).length > 0 ? <Calender slot={slots} getTimeSlots={getTimeSlots} /> : <p>Loading...</p>}
         
         <h2>Time Slots for {currentDate}</h2>
         {Object.keys(times).length > 0 ? <TimeSlots times={times}/> : <h4>Select Timings</h4>}
        
      </div>
   );

}

export default SkyDive;