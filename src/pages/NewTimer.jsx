import React, { useEffect, useState } from 'react';

const NewTimer = () => {
   const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

   useEffect(() => {
      if (timeLeft <= 0) return;

      const timer = setInterval(() => {
         setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Clear on unmount
   }, [timeLeft]);

   const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
   };

   return (
      <div style={{ fontSize: '3rem', textAlign: 'center', padding: '1rem' }}>
         {formatTime(timeLeft)}
      </div>
   );
};

export default NewTimer;