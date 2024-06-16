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
      <div className="flex flex-col items-center justify-around h-[100vh]">
         <h1>Counter APP using useReducer </h1>
         <div className="flex gap-5 justify-center items-center">
            <button onClick={substract} className="px-2 py-1 bg-green-200 border rounded-md">-</button>
            <span className="font-bold text-5xl">{state.count}</span>
            <button onClick={add} className="px-2 py-1 bg-green-200 border rounded-md">+</button>
         </div>
         <ul>
            <li>useReducer is just like useState , but helps us to manage complex states in React component</li>
            <li>It mostly works on the consept of Redux state management only</li>
         </ul>
      </div>
   );
}

export default CounterReducer;