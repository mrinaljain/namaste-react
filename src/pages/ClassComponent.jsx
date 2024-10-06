import { Component } from "react";
import { Outlet } from "react-router-dom";

class ClassComponent extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <h1>Class Component</h1>
            <hr />
            <Outlet />
         </div>
      )
   }
}

export default ClassComponent;