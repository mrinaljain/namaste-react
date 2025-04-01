import { Component } from "react";
import { Outlet } from "react-router-dom";

class ClassComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         "name": "mrinal"
      }

      this.setState({ "name": "kunal" });
   }

   componentDidMount() {
      // this.setState({ "name": "kunal" });
   }
   render() {
      // this.setState({ "name": "kunal" });


      return (
         <div>
            <h1>Class Component</h1>

            <h2>{this.state.name}</h2>
            <hr />

            <Outlet />
         </div>
      )
   }
}

export default ClassComponent;