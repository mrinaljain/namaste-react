import React from "react";
class ControlledInput extends React.Component {
   constructor() {
      super();
      this.state = {
         name: "Random"
      }
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      this.setState({ name: e.target.value });
   }

   render() {
      return (
         <div>
            <h1>Controlled Inputs</h1>
            <hr />

            <input
               type="text"
               value={this.state.name}
               onChange={this.handleChange} />

            <h2>{this.state.name}</h2>

            <ul>
               <li>In controlled inputs th value of input is controlled in a react State variable</li>
            </ul>
         </div>
      );
   }
}

export default ControlledInput;