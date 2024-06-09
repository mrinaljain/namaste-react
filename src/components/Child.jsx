import React, { memo } from "react";

export default Child = memo(({ ct, increase }) => {
   console.log("Child Build");
   return (
      <div className="bg-gray-500 rounded-md   p-3">
         <h2>Child Component</h2>
         <button
            className='border border-black px-2 bg-red-300'
            onClick={increase}>Increment</button>
         <h4>Count :{ct}</h4>
      </div>
   );
})

// export default memo(Child);
