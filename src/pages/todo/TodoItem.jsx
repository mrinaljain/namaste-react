import React, { useRef, useState } from 'react'

function TodoItem(props) {

   const { id, todo, completed, userId } = props.item;
   const [editing, setEditing] = useState(false);
   let inputRef = useRef(id)
   function deleteTodo(id) {
      props.modifytodos((oldTodos) => {
         return oldTodos.filter((oldTodo) => oldTodo.id != id);
      });
   }
   function editTodo(id) {
      inputRef.current.setAttribute("contenteditable", true)
      setEditing(true);

   }
   function saveTodo(id) {
      const updatedText = inputRef.current.innerText;
      props.modifytodos((oldTodos) => {
         let newTodos = [];
         // console.log(oldTodos);
         oldTodos.forEach(element => {
            console.log(element);
            if (id == element.id) {
               newTodos.push({
                  id: element.id,
                  todo: updatedText,
                  completed: element.completed,
                  userId: element.userId
               })
            } else {
               newTodos.push(element);
            }
         });
         return oldTodos;
      });
      inputRef.current.setAttribute("contenteditable", false)
      setEditing(false);

   }
   return (
      <div className='border border-gray-300 px-2 py-2 flex flex-row justify-between my-5 no-wrap'>
         <span ref={inputRef}>{todo}</span>
         <div>
            <button
               onClick={() => deleteTodo(id)}
               className='border border-gray-300 bg-red-500 rounded-md px-2 '>
               Delete
            </button>
            {editing ? <button
               onClick={() => saveTodo(id)}
               className='border border-gray-300 bg-blue-500 rounded-md px-2'>
               SAVE
            </button> : <button
               onClick={() => editTodo(id)}
               className='border border-gray-300 bg-blue-500 rounded-md px-2'>
               Edit
            </button>
            }

         </div>

      </div>
   )
}

export default TodoItem;