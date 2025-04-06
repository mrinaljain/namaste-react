### **Never Ever compare the class component lifecycles to hooks.**

https://learn.habilelabs.io/what-are-component-lifecycle-methods-in-react-js-5269aaa37046


![Life Cycle Methods](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*vOnEhlHk6n7v-ukPxc3E0w.png)

## React Component Lifecycles

1. Mounting Cycle
   1. Render Phase
   2. Pre Commit Phase
   3. Commit Phase
2. Update Cycle
   1. Render Phase
   2. Pre Commit Phase
   3. Commit Phase
3. Unmount Cycle
   1. Render Phase
   2. Pre Commit Phase
   3. Commit Phase
*Note* : Each Cycle has  all 3 phases

### Render Phase
   - Everything happens in virtual DOM
   - React will batch  components in render phase ,before moving to commit phase.

**constructor**
   :


**getDerivedStateFromProps**
   :

**shouldCOmponentUpdate**
   :

      
**render** 
   :


### Pre Commit Phase

getSnapshotBeforeUpdate
   :


### Commit Phase
   - This happens in Browser DOM

**componentDidMount**
   : This runs after the rendes phase is done.
```
componentDidMount(){

}
```
   - can be converted to an async method in cas we want to make API call.

**componentDidUpdate**
         : This happens after render phase when setstate is called, props are changed, forceUpdate is called.

```
componentDidUpdate( prevProp, prevState ){

}
```
- we get acces to prevProp, prevState in this method.

**componentWillUnmount**
   : Called just before the component is about to be removed/unmounted from DOM.
- used to clear intervals.






- why constructor only  used to define state variable
- can we load a component asynchronously
- can we access props without defining constructor
- How actually react batches updates
- Try live coding with 2 diffrent childs and print all lifecycle logs
- DOM updat happens in which phase ?
- async didmount VS async use effect
- complete notes of all of it
- remaining lifecycle methods