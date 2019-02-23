# Async Javascript ForEach
### Just a function, easy and simple.

___

#### Example Usage :
```
// You can use it with Jquery or simple Array [0, 2 ,3]
forEachOf($(selector), (_this, key, callbackForNext) => {
    // Example with Timeout
    setTimeout(()=>{
        // Put Your asyn code Here Example
        callbackForNext();
    }, 2000); // Wait 2 Seconds and continue to next item

}, () => {
    // This function is called when all the items were iterated
});

```
