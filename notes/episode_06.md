
## Use Effect

Use effect is called after component is Rendered ONCE.
- it does not gets called on every dependency change.
- if anything changes in dependency array then useEffect is called again.
```
useEffect(()=>{
   // callback function

   return //cleanup function
},
[dependency array]);
```


### Questions

1. What is optional Chaining?

