import React from "react";
import { createStore } from "redux"



function ReduxCounter() {

   function increase() {
      store.dispatch({ type: 'INCREASE' });
   }
   function decrease() {
      store.dispatch({ type: 'DECREASE' });
   }
   return (<div>
      <h1>Redux Counter</h1>
      <hr />

      <button
         onClick={increase}
      >Increase</button>

      <h2>{0}</h2>
      <button
         onClick={decrease}>Decrease</button>
   </div>)
}

export default ReduxCounter;

const defaultState = {
   count: 0,
}
const counterReducer = (state = defaultState, action) => {
   switch (action.type) {
      case 'INCREASE':
         console.log(action.type);
         return { count: state.count + 1 };
      case 'DECREASE':
         console.log(action.type);
         return { count: state.count - 1 };
      default:
         return state;
   }
}
const store = createStore(counterReducer);