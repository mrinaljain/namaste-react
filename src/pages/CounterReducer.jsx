import React, { useReducer } from "react";
function CounterReducer() {
   const [state, dispatch] = useReducer(reducer, { count: 0 });

   function reducer(state, action) {

      switch (action.type) {
         case 'add':
            return { count: state.count + 1 };

         case 'sub':
            return { count: state.count - 1 };

         default:
            return state;
      }
   }

   function add() {
      dispatch({ type: 'add' });
   }

   function substract() {
      dispatch({ type: 'sub' });

   }
   return (
      <div>
         <h1>Counter APP using useReducer </h1>
         <div>
            <button onClick={substract}>-</button>
            <span>{state.count}</span>
            <button onClick={add}>+</button>
         </div>
         <ul>
            <li>useReducer is just like useState , but helps us to manage complex states in React component</li>
            <li>It mostly works on the consept of Redux state management only</li>
         </ul>
      </div>
   );
}

export default CounterReducer;