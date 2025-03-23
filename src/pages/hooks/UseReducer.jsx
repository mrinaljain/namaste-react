import React, { useReducer } from 'react'

function reducer(state, action){

   switch (action.type) {
      case increment:
         
         break;
   
      default:
         break;
   }
}

const [state, dispatch] = useReducer( reducer,{})

function increment(){
   dispatch({type:"increment"})
}

function UseReducer() {

  return (
    <div>
        <button onClick={increment}>Increase</button>
    </div>
  )
}

export default UseReducer;


// https://www.freecodecamp.org/news/react-usereducer-hook/