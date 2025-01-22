# Namaste React
- React was created by Jordan Walke

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoirthim - C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- HTTPS
- Compress
- Diagnostics
- Error handeling
- Multi core
- Tree shaking
- Consistet Hashig



### CORSS issue 
https://cors-anywhere.herokuapp.com



# Lifecycle hooks
- constructor
- render
- componentWillMount
- componentDidMount
- componentShouldUpdate
- componentDidUpdate
- commmponentwillUnmount







### Questions


- Statefull and Stateless components?
- Diffrence between controlled and uncontrolled components?
- What are diffrent lifecycle hooks?
- Explain working of Redux.
- What are the major features of React?
   - Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
   - It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
   - Supports server-side rendering which is useful for Search Engine Optimizations(SEO).
   - Follows Unidirectional or one-way data flow or data binding.
   - Uses reusable/composable UI components to develop the view.
- What is JSX
   - Its a Syntactic Sugar.
- What is the difference between Element and Component?
   Element is an object AND component is an function
- Diffrence between usememo and React .memo
   - React.memo() is a higher-order component
- What are synthetic events in React?
- What is the difference between Shadow DOM and Virtual DOM?
- What is the difference between createElement and cloneElement?
- Does the lazy function support named exports?
   No
- Why React uses className over class attribute?
   because 'class' is already a keyword in javascript.
- What are Fragments?
   <> </>
- What are portals in React?
  Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  ```
  ReactDOM.createPortal(child, container);
  ```
- What is the use of react-dom package?
- What is ReactDOMServer? 
  to use react components on server 
  ```
  renderToString
  renderToStaticMarkup
  ```
- How to enable production mode in React?
- React Mixin & React hook.
- Are custom DOM attributes supported in React v16?
- How to add Google Analytics for React Router?
- Is it possible to use async/await in plain React?
- Why are 2 react script files imported ?

- why do we write crossorigin in script tag ?
  to tell browser that we need to send credentials or nor ( ananomous , use-credentials ) are the two possible values.




### TODO

- Error Boundries
