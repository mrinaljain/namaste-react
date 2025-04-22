import React, { useReducer, useState } from "react";
function reducer(state, action) {
   switch (action.type) {
      case "add":
         return [...state, action.payload];
      case "remove":
         let newtodo = state.filter((item) => item !== action.payload);
         return newtodo;

      default:
         break;
   }
}
function ToDoReducer() {
   const [state, dispatch] = useReducer(reducer, []);
   const [todo, setTodo] = useState("");

   function addTodo(e, text) {
      e.preventDefault();
      dispatch({ type: "add", payload: text });
   }
   console.log("state", state);
   function handelChange(e) {
      setTodo(e.target.value);
   }

   function handleRemove(text) {
      dispatch({ type: "remove", payload: text });
   }
   return (
      <div>
         <h1>TODO using useReducer</h1>

         <form onSubmit={(e) => addTodo(e, todo)}>
            <input
               type="text"
               value={todo}
               onChange={handelChange}
            ></input>
            <button
               type="submit"
            > Add Todo</button>
         </form>

         {state.map((item, index) => {
            return (
               <div>
                  <h4
                     key={index}>
                     {item}
                  </h4>
                  <button
                     onClick={() => handleRemove(item)}>
                     Remove
                  </button>
               </div>
            );
         })}
      </div>
   );


}

export default ToDoReducer;