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
   : constructor is used to initilise the  parend constructor, or to initilise the props provided or to define state.
```
```

**getDerivedStateFromProps**
   : It runs when the component mounts for first time and also runs when any dependent props change.

   - to basically jab bhi hum state define krte time koi prop use krte hai usko handle krne k liye use kr dakte hai isko
   - kuch return karoge to stateUpdate hogi aur rerender hoga otherwise nhi hoga

   ```
   static getDerivedStateFromProps(newProps, prevState){
      // kuch return karoge to state update hoga
      // null return karoge to kuch bhi nahi hoga
   }
   ```

**shouldComponentUpdate**
   : shouldComponentUpdate bolta hai React ko: “Aree ruk ja, abhi render ki zarurat nahi — sab kuch same hi hai.” 😄
   - next state isliye pta hoto ha kyuki ye render k just pehle call hota hai , jo jo bhi changes honethe state mai vo already ho gye honge.
   ```
   shouldComponentUpdate(nextProps, nextState) {
      // return true (rerender hoga) 
      // or false (rerender nhi hoga)
   }
   ```
      
**render** 
   :


### Pre Commit Phase

getSnapshotBeforeUpdate
   : ye render k baad aur didupdate k pehle call hota hai.
   - bas dom update ke just pehle hota hai.
   - koi essi chiz jo dom update k just pehle chahiye ho aur Didupdate ko pass on krni ho to ye use kre
```
getSnapshotBeforeUpdate(prevProps, prevState) {
  if (prevProps.messages.length < this.props.messages.length) {
    const messageList = this.messageListRef.current;
    return messageList.scrollHeight - messageList.scrollTop;
  }
  return null;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
    const messageList = this.messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight - snapshot;
  }
}
```

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