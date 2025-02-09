import React from "react"
class AppComponent extends React.Component {

   state = {
      count: 0
   }
   add = () => {
      this.setState(prevState => { count: prevState.count + 1 })
   }

   subtract = () => {
      this.setState(prevState => { count: prevState.count - 1 })
   }
   render() {
      return (
         <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
               <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
         </div>
      );
   }
}