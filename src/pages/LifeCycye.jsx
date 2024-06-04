import React from "react";
class LifeCycle extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         count: 0,
         name: "mrinal"
      }
      this.changeProp = this.changeProp.bind(this);
   }
   //[depricated] Just Before Render (mount hone k pehle) 
   UNSAFE_componentWillMount() {
      console.log("Parent : Component  about to Mount");
   }
   changeProp() {
      this.setState({ name: "newName" })
   }


   render() {
      return (
         <div>
            <h1>React LifeCycle Events</h1>
            <hr />
            <h2>{this.state.count}</h2>
            <ChildLifeCycle name={this.state.name} />

            <button onClick={this.changeProp}> Change Prop</button>
            <ul>
               <li>didUpdate</li>
               <li>willUpdate</li>
               <li>willMount</li>
               <li>didMount</li>
               <li>willUnMount</li>
               <li>shouldUpdate</li>
            </ul>
         </div>
      );
   }
   // called right after mount happen
   componentDidMount() {
      console.log("Parent : Component  Mounted");
   }

   // right before unMounting phase is about to start
   componentWillUnmount() {
      console.log("Parent : Component about to UN Mount");
   }

   // called when component is rerenderes (after first mount)
   componentDidUpdate() {
      console.log("Parent : Component  Re Rendered");
   }
   componentDidCatch() { }

}

export default LifeCycle;


class ChildLifeCycle extends React.Component {

   constructor(props) {
      super(props);
   }

   // called when state. prop is changed and returns boolean
   shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps);
      console.log("Child : Should I ReRender ?");
      return true;
   }
   //[depricated] Just Before Render (mount hone k pehle) 
   UNSAFE_componentWillMount() {
      console.log("Child : Component  about to Mount");
   }

   render() {
      return (
         <div>
            <h2>Child Lifecycle</h2>
            <p>Props : {this.props.name}</p>
         </div>
      );
   }
   // called right after mount happen
   componentDidMount() {
      console.log("Child : Component  Mounted");
   }

   // right before unMounting phase is about to start
   componentWillUnmount() {
      console.log("Child : Component about to UN Mount");
   }

   // called when component is rerenderes (after first mount)
   componentDidUpdate() {
      console.log("Child :Component Re Rendered");
   }
}