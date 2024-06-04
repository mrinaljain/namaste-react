import React from "react";

function DefaultParamsChild({ name = 'Default Name' }) {
   return (
      <div>
         <h2>Child with Dafault Parameters</h2>
         <h3>{name}</h3>
      </div>
   );
}

export default DefaultParamsChild;