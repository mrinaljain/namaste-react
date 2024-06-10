import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

function Todo() {
   const [todos, setTodos] = useState([])
   const [inputText, setInputText] = useState("");
   const getTodos = async () => {
      try {
         const response = await fetch("https://dummyjson.com/todos");
         const data = await response.json();
         setTodos(data.todos);
      } catch (error) {
         console.log(error.message);
      }


   }
   useEffect(() => {
      getTodos();
      return () => {
         console.log("TODO page about to destroy OR rerender");
      }
   }, [])
   function handelChange(e) {
      setInputText(e.target.value);
   }
   async function addTodo() {
      try {
         const response = await fetch('https://dummyjson.com/todos/add', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               todo: inputText,
               completed: false,
               userId: 5,
            })
         });

         const data = await response.json();
         setTodos((oldTodos) => {
            return [...oldTodos, data];
         })
         console.log("TODO addition", data);
      } catch (error) {
         console.log(error.message);
      } finally {
         setInputText("");
      }

   }
   return (
      <div>
         <h1>TODO APP</h1>
         <input
            type="text"
            className='border border-red-300 rounded-md px-2'
            onChange={handelChange}
            value={inputText}></input>
         <button
            onClick={addTodo}
            className='border border-red-300 rounded-md px-2'>Add</button>
         {todos.map((todoItem, index) => <TodoItem key={index} modifytodos={setTodos} item={todoItem} />)}
      </div>
   )
}

export default Todo