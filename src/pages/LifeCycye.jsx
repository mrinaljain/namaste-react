import React from "react";
class LifeCycle extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         count: 0,
         name: "mrinal"
      }
      this.changeProp = this.changeProp.bind(this);
      console.log("Parent : Constructor");
   }
   componentWillUpdate() { }
   //[depricated] Just Before Render (mount hone k pehle) 
   UNSAFE_componentWillMount() {
      console.log("Parent : Will Mount");
   }
   changeProp() {
      this.setState({ name: "newName" })
   }


   render() {
      console.log("Parent : Render");
      return (
         <div>
            <h1>React LifeCycle Events</h1>
            <hr />
            <h2>{this.state.count}</h2>
            <ChildLifeCycle name={this.state.name} />

            <button
               className="border px-2 py-1 bg-red-300"
               onClick={this.changeProp}> Change Prop</button>
            <h2>Order of Execution</h2>
            <ul>
               <li>didMount</li>
               <li>didUpdate</li>
               <li>willUpdate</li>
               <li>willMount</li>

               <li>willUnMount</li>
               <li>shouldUpdate</li>
            </ul>
         </div>
      );
   }
   // called right after mount happen
   componentDidMount() {
      console.log("Parent : Did Mount");
   }

   // right before unMounting phase is about to start
   componentWillUnmount() {
      console.log("Parent : Will UnMount");
   }

   // called when component is rerenderes (after first mount)
   componentDidUpdate() {
      console.log("Parent : Did Update");
   }


}

export default LifeCycle;


class ChildLifeCycle extends React.Component {

   constructor(props) {
      super(props);
      console.log("Child : Constructor");
   }

   // called when state. prop is changed and returns boolean
   shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps);
      console.log("Child : Should Update?");
      return true;
   }
   //[depricated] Just Before Render (mount hone k pehle) 
   UNSAFE_componentWillMount() {
      console.log("Child : Will Mount");
   }

   render() {
      console.log("Child : Render");
      return (
         <div>
            <h2>Child Lifecycle</h2>
            <p>Props : {this.props.name}</p>
         </div>
      );
   }
   // called right after mount happen
   componentDidMount() {
      console.log("Child : Did Mount");
   }

   // right before unMounting phase is about to start
   componentWillUnmount() {
      console.log("Child : Will UnMount");
   }

   // called when component is rerenderes (after first mount)
   componentDidUpdate() {
      console.log("Child : Did Update");
   }
}