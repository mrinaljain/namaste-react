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

ForwardRef is a Higher order component which is used to recive the useRef values from the parent component and pass it on to the child component.
- so basically we pass useRef value as a prop from parent and iwe can't directly recive it in child so we have to wrap child with a HOC that is ForwardRef component.

#### 22. Which is preferred option with in callback refs and findDOMNode()?
Callback ref basicallay another way to add refs functionality to the DOM element.
   - insted of using useRef hook we can directly provide a callback to the ref parameter .
   ```
   let inputRefCallback = (node) => {
      if (node) {
         node.focus();
      }
   }
   <input type="text" ref={inputRefCallback} >
   ```
**callback refs** are prefered way because
   - doesnot require useeffectto attach
   - direct and fast


#### 23.  Why are String Refs legacy?

Old way of defining refs which is now replaced by useRef and callback refs

#### 24. What is Virtual DOM?

Virtual DOM is a javascript object like structure created by React in order to complete the reconciliation and DOM update process more fficiantly.
   - It is the exact copy of original DOM
   - it contains Js object not Nodes

#### 25. How Virtual DOM works?

Virtual DOM works on the algorthim of react fiber and the entire process is known as reconsiliation.
- react creates a copy of original DOM
- when any state, prop changes then re-render is triggerd
- behind the scenes reach has another tree structure which react compares with the virtual DOM and makes changes in the Virtual DOM
-finally with the help of diffing ALgorithm this changes are shifted to the Orignal DOM in batches.


#### 29. What are controlled components?

Controlled component in react are the ones whos values are controled by the react state variables and 
- they re-render every time state variable changes

#### 30. What are uncontrolled components?

Uncontrolled components in react are the ones who are independent from the react state and there values can be read only using useRef
- no  reender when value changes

#### 31. What is the difference between createElement and cloneElement?

create element creates new elemnt and cloneElement creates a copy of the element where we can change any properties.
```
React.createElement('div', {properties})

React.cloneElement(elementToBeCopied, {newpropeeties/ properties to be overriden})
```

#### 32. What is Lifting State Up in React?

In react there is only unidirectional flow of data is allowed that is from parent to child.
so if there is a case when data of some child is required in some other child in that case the data is defined nearest common ancestor ,  and the data is passed via prop drilling to the bottom. 


#### 33.[TODO] What are the different phases of component lifecycle?
Coponent lifecycle has 2 phases
- Render Phase
- PRe commit phase 
- Commit phase

#### 34. What are the lifecycle methods of React?

badiya jama k likhna hai answer so that i can speak it like a story


#### 35. What are Higher-Order components?

HOC components in react are an wraper arround the react components which unables us to reuse the component by adding some extea functionality on top of it.

HOC takes a component as an input and returns a better version of it without affecting the props .

Setps to create HOC As per defination HOC is acomponent that takes Component and returns modified version of it.
1. Create a Component and take another component as parameter.
2. in the return statement return another component that is basicaly a function in simple language.
3. pass the props recived from HOC down to child Component.
```

function HOC(Component) {
  
   return (props)=> (
      <>
         <div>Modification</div>
         <Component {...props}/>
      </>
      
   )
}
```


#### 36. How to create props proxy for HOC component?

**Prop proxy** for HOC means adding new props in between while orignal props of components are being passed to the component.

```
function HOC(Component){

return (props)=>{
   let newProps = {
      naem: "dsad",
      clASS" "SADAS"
   }
   <>
   <div> Modification </>
   <Component {...newProps} {... props}/>
   </>
 } 
}

```

#### 37. What is context?

Context is a storage container/ shared global state in form of an Object , which acts as a common storage and single source of truth to all the childrens who are subscribed to its values.
- it saves prop drilling

```
let {Provider, Consumer} = React.createContext({})
```
- in class components where useContext Hook is not available then Consumer can be used as alternative


#### 38. What is children prop?

Children prop is basicaly passing JSX elements to another component via putting them between opening and clossing tags.. and then accesing it as children attribute  in next widget
```
<ParentComponent props={props}>{jsx eements}</ParentComponent>


function ChildComponent({props,children})=>{

   return (
      <div>
       {childern}
      </div>
   )
}
```

#### 39. How to write comments in React?

- /* */
- //


#### 40. What is the purpose of using super constructor with props argument?

in React Class copmonent using super(props)  does following
- It takes the props and passes it to parent's constructor
- the parent(React.component) constructor takes the props and assignes it to this.props
- now this.props is available to use across the component and also in diffrent lifecycle methods.


#### 41. What is reconciliation?

When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is
called **reconciliation**.


#### 42. How to set state with a dynamic key name?

```
this.setState({ [event.target.id]: event.target.value })

[event.target.id] is baacically the dynamic part
```

#### 43.  What would be the common mistake of function being called every time the component renders?
 - dependency array might not be passed in useEffect.
 - useCallback hook is not being used
 - wrong assigning of function to handler
  ``` return <button onClick={this.handleClick()}>{'Click Me'}</button>


#### 44. Is lazy function supports named exports?
