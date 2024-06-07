// Default import
import React from "react";
// named import
import { useState } from "react";
function ImportExport() {


   return (<div>
      <h1>Import / Export </h1>
      <hr />
      <ul>
         <li>Named Export / Default Export</li>
         <li>Default export can only be one in a file</li>
         <li>Named Export can be multiple</li>
         <li> Named  imports are in {"{}"} while default expors are outside </li>
      </ul>
   </div>)
}

export default ImportExport;