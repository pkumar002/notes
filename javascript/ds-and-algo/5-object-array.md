# Object and array

- Understand how object and array work through the lens of `Big O`
- Explain why `adding` and `removing` elements to the `beginning` of an array is costly.
- Compare and contrast the runtime for arrays and object, as well as built-in methods.

**`Objects:`** <br/>
Unordered, key => value paris

```
 const student={
   name:"Pradeep",
   age:32,
   email:'arya.creativemind@gmail.com',
   isWorking:true,
   skills:["html","css","js","vue","angular","react","node","mongodb"]
 }
```

_Objects work well_:

- When you don't need order.
- When you need fast access / insertion and removal.

**`Big O of Objects:`**

| Operation | Notations |
| --------- | --------- |
| Insertion | O(1)      |
| Removal   | O(1)      |
| Searching | O(n)      |
| Access    | O(1)      |

When you don't need any ordering `Objects` are a excellent chioce.
