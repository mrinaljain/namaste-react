import React from "react";
import DefaultParamsChild from "./DefaultParamsChild";
import DefaultPropsChild from "./DefaultPropsChild";
import ChildElement from "./ChildElement";

function Props() {

   const propObject = {
      "name": "mrinal",
      "lastName": "jain",
      "number": 8485
   }
   return (
      <div className="hero">
         <h1>Props in React</h1>
         <hr />
         {/* Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead */}
         <DefaultPropsChild />
         <br />
         <br />
         <br />
         <DefaultParamsChild />
         <br />
         <br />
         <br />
         {/* Passing props in diffrent ways  4 WAYS*/}
         <ChildElement name="Mrinal" />
         <ChildElement {...propObject} />
         {/* <ChildElement detail={{...propObject}} /> */}
         {/* <ChildElement detail={propObject} /> */}
         <hr />
         <h2><i>Summary</i></h2>
         <ul>
            <li>Default props and parameters are used when no props are passed in the component</li>
            <li>If <b>null</b> is passed then <b>null</b> is given prefference</li>
            <li><b>PropType</b> are defined  in order to expect specific datatype of the prop</li>
            <li>Props can be pased in 3- 4 ways  like ke value pairs, directly passing the object, destructured object</li>
         </ul>
      </div>
   );
}

export default Props;



