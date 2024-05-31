import React, { memo } from "react";

export default Child = memo(({ ct, increase }) => {
   console.log("Child Build");
   return (
      <div>
         <h2>Child Component</h2>
         <button onClick={increase}>Increment</button>
         <h4>Count :{ct}</h4>
      </div>
   );
})

// export default memo(Child);
