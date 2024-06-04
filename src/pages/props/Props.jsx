import React from "react";
import DefaultParamsChild from "./DefaultParamsChild";
import DefaultPropsChild from "./DefaultPropsChild";

function Props() {

   return (
      <div>
         <h1>Props in React</h1>
         <hr />
         <DefaultPropsChild />
         <DefaultParamsChild />
         <hr />
         <h2><i>Summary</i></h2>
         <ul>
            <li>Default props and parameters are used when no props are passed in the component</li>
            <li>If <b>null</b> is passed then <b>null</b> is given prefference</li>
            <li><b>PropType</b> are defined  in order to expect specific datatype of the prop</li>
         </ul>
      </div>
   );
}

export default Props;



