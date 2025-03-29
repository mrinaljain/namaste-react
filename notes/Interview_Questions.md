#### 1. What is React?

React is a Javascript library which makes the DOM manipulation more efficient with the help of Virtual DOM.Also

#### 2. What are the major features of React?

- DOM manipulation is easier becaus of Virtual DOM
- Reusable component makes code more modular and redable
- React can be used even in sub part of a  website 
- Alowes us to create SPA single page applications
- Superpower of variables useState is available

#### 3. What is JSX?

JSX is Javascript XML which is a **syntactic sugar** on top of Javascript which makes it easier to write and create React components which otherwise will be a very long and tedious code in Javascript.
JSX is in background transpiled into the Browres Compatible Javascript with the help of transpiler i.e  **Bable**.
Bable makes sure it transpiles  to browser specific Javascript.

#### 4. What is the difference between Element and Component?

*React Element* is nothing but a Javascript object under the hood this object is Used by react to paint the Virtual DOM and later shift it to the actual DOM of browser.
- React Element are immutable

*React Components* are simple functions that return React Elements.
- React component are statefull, mutable.

#### 5. How to create components in React?

Components in react can be created  in 2 diffrent ways 
   - Class components
   Class components are the old way of creating components where we need to create a class  and extend it by React.component class to get access of methods inside the parent class.
      - we need to use render method to return the react element.
      - We need to use component lifecycle methods to implement sideeffects and other functionalites.

   - Functional Components
   Functional component on the other hand has a new and easy syntax for creating component where we simply define a function by the name of component and return a React Element.
      - React hooks are available to implement sideeffects.


#### 6. When to use a Class Component over a Function Component?

- Legacy code
- Error Boundries

#### 7. What are Pure Components? 

Pure components in React Js as the components which return the same React Element every time based on the same input props .
 - Pure components in class component are implemented by extending purecomponent
 -Pure component in functional component is made by React.memo.


 #### 8. What is state in React?

 State in react is a dynamic container which holds the data on behalf of a component and updates/ re-renders the component in case of any changes inside the data stored in state.
   

 #### 9. What are props in React?

 Props in react are the attributes(read-only inputs) that any component accepts as an input based upon which a component is painted/ rendered.
 - props are immutable.

 #### 10. What is the difference between state and props?

 - state is mutable , props are not
 - props are passed and state can also be pased asprop.
 

#### 11. Why should we not update the state directly?

Because we needs to trigger re-render once state changes and  the inbuilt methods help us to achive that.
otherwise direct state updates might create inconsistancy.


#### 12. What is the purpose of callback function as an argument of setState()?

callback function of the setState is the second argument that runs after the state has ben updated, hence used for the logich to be run after state update.
   - api 
   - action dependent on state update


#### 13. What is the difference between HTML and React event handling?

In HTML the  interaction that happens with the nodees are handeled by addding onclick handelers or attaching the event listeners.
In React thes are handeled by synthetic Events because react BTS takse care of all the browsers and compatibility with single click handeler that we have added.

#### 14. How to bind methods or event handlers in JSX callbacks?

There can be 2 ways for functional components
```
<button onClick={clickEventFunction}>Click Me</button>


let button = useRef();
useEffect(()=>{
button.target.addEventListener(clickEventFunction)
}, [])
```

There can be 2 ways for class components
```
this.method = this.method.bind(this)
```

#### 15. How to pass a parameter to an event handler or callback?

1. this can be done by converting function syntax to arrow function
```
onClick={(parameter)=>functionName()}
```
2. by using the bind method
```
onClick={handleClick.bind(null, 42)}
```

#### 16. What are synthetic events in React?

In React user interaction events are handeled by synthetic Events because react BTS takse care of all the browsers and compatibility with single handeler that we have added.
Example : onClick is replaced by click etc

#### 17. What are inline conditional expressions?

 Terniray , logical AND, logical OR
```
true ?? "statement"

false ?? "statement"

true && "statement"

false && "statement"

true ?? "this":"that"
```

#### 18. What is "key" prop and what is the benefit of using it in arrays of elements?

Key property is usefull in many diffrent ways as it acts as an identity for any element.
- it is passed to parent constructor to initilise the parant element's constructor.
- while deling with Array of elements like in a orderd list , Keys make it easier for the react to update the DOM more efficiently as the React's diffing algorithm can difftentiate the  list items based upon the key's value given that is unique.
- Optimized Reconciliation
- Improves Performance
- Avoids UI mismatch


#### 19. What is the use of refs?
refs in React are  used to store values that can be persisted across re-renders of the element and also whenever there is a change in ref's value it doesnot automatically trigger re-render.
```
useRef // for functional components

c // for class components
```

### 20. How to create refs?

```
const inputRef = useRef(null);

useEffect(()=>{

   let value = inputRef.current.value;
}, [])

<input type="text" ref={inputRef}>
```
For class component
```
this.inputRef = React.createRef(undefined)
```

#### 21. What are forward refs?
