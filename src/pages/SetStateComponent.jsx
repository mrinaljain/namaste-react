import React from "react";
class SetStateComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "Mrinal",
         count: 0,
         two: 2
      }
      this.add = this.add.bind(this);
      this.updateName = this.updateName.bind(this);
      this.square = this.square.bind(this);
   }

   add() {
      // this.setState((prevState) => ({ count: prevState.count + 1 }))
      this.setState((prevState) => { return { count: this.state.count + 1 }; })
      // this.setState({ count: 2 })
   }

   updateName() {
      this.setState({ name: "Updated Name" });
   }
   // Access state as well as props inside setstate
   square() {
      this.setState((state, prop) => {
         console.log("prop", prop);
         return { two: state.two * 2 };
      }, () => {
         console.log("Update Done");
      })
   }


   render() {
      return (
         <div>
            <h1>SetState Component</h1>
            <p>{this.state.name}</p> <button onClick={this.updateName}>Update Name</button>
            <p>{this.state.count}</p><button onClick={this.add}>Incremenmt</button>

            <h3>Two Square : </h3>
            <button onClick={this.square}> Square</button>
            <span>{this.state.two}</span>


            <ul>
               <li>setState can take to methods first is updater, which updates the state and second is the callback which is called after state is updated </li>
               <li>setState is async hence it is slow a  times</li>
               <li>setstate can also be given a direct updated value of the state </li>
               <li>state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state </li>
               <li><a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank"> More about setState</a></li>
            </ul>
         </div>
      )
   }
}

export default SetStateComponent;




//! How state works in react
// this.setState(updater, callback);
// 
