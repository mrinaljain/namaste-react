# React Hooks

## State Managemant

   ### useState

   ### useReducer   

   - In case there is complex state 
   - When the state logic becomes too complicated or when you need to handle state changes in a more predictable and manageable way, the useReducer hook is your best bet.
   -  useReducer takes a reducer function and initial state
      returns stateObject and dispatcher.
   ```
   const [state, dispatch] = useReducer(reducer, initialState,init);

   ```
   *state*: represents the current value and is set to the initialState value during the initial render.
   *dispatch*: is a function that updates the state value and always triggers a re-render, just like the updater function in useState.
   *reducer*: is a function that houses all the logic of how the state gets updated. It takes state and action as arguments and returns the next state.
   *initialState*: houses the initial value and can be of any type.
   - The reducer function is always declared outside of your component and takes in a current state and action as arguments.
   
   *init*: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
   
      [Read more ](https://www.freecodecamp.org/news/react-usereducer-hook/)

   ### useSyncExternalStore

## Effect Hooks

   ### useEffect
   - ideal for syncing yourReact code with browser APIs (ex: useRef)

   ### useLayoutEffect
   - runs just before the UI paint
   - synchronous
   - example : to get height before render

   ### useInsertionEffect



   ### useRef
   - DOM elements
   - Mutable


   ### useImperetiveHandle


   ### useMemo (memoization)
   - to store the value of a heavy computation so that we dont have to call it again and again.
   - recalculates only when one of its dependency changes

   ### useCallback
   - solves the problem where callback function ka refference store ho jata hai. so it doesnt call again and again.
   - prevents function from being recreated

   ### useContext


   ### useTransition


   ### useDeferredValue

   ### useDEbugValue

   ###useID