# [Space complexity](#space-complexity)

We can also use big `O` notation to analyze `space complexity:` how much additional memory do we need to allocate in order to run the code in our algorithms?

**`Rule of thumbs`**

- Most primitives (booleans, numbers, undefined, null) are constant space.
- String require `O(n)` space (where n is the string length).
- Reference types are generally `O(n)`, where n is the length (for `arrays`) or the number of keys (for `Object`).

**`Example 1:`**

```
 function sum(arr){
   let total=0; // one number
   for(let i=0;i<arr.length;i++){ // i=0 --> one number
     total+=arr[i]
   }

   return total;
 }
```

It has `O(1)` space complexity.

**`Example 2:`**

```
 function sum(arr){
   let newArr=[]; //
   for(let i=0;i<arr.length;i++){ // i=0 --> one number
     newArr.push(arr[i] * 2)
   }

   return newArr;
 }
```

It has `O(n)` space complexity.
