# [Time Complexity](#time-complexity)

`Time` complexity represents the number of `times` a statement is executed.

**`Example:`**<br/>
Get the sum of `n` numbers.

- `Solution 1`

  ```
  function sum(n){
    let sum=0;
    for(let i=0;i<n;i++){
      sum+=i;
    }
    return sum;
  }

  let t=performance.now();
  sum(5) // 10
  let t1=performance.now();

  console.log (`time - (${t1-t} / 1000) seconds`)
  ```

- `Solution 2`

  ```
    function sum(n){
      return n * (n+1)/2;
    }

    let t=performance.now();
    sum(5) // 10
    let t1=performance.now();

    console.log (`time - (${t1-t} / 1000) seconds`)
  ```

Which one is faster and why?.

`Ans`: Solution 2 is faster

<br/>

**`Note:`** <br/>
The problem with time.

- Different machine will record different time, so we can not rely on time.
- Same machine will record different time, so we can not rely on time.
- For fast algorightms, speed measurments may not be precise enought?.

<br/>

`If not using time then what?`

- Rather thant counting `seconds`, which are so variable....
- Let's count the `number of operations` the computer has to perform!.

`**Solution 1:`\*\*
It has `5n+2` operation.

- sum=0 => 1 operation.
- let i=0 => 1 operation.
- sum+= => n additions, n assignments.
- i++ => n additions and n assignments.
- i<=n => n comparisions

the complexity is `O(n)`,

`**Solution 2:`\*\*
It has 3 operation

1. Multiplication.
2. Addition.
3. Division.

Complexity is `O(1)`, always 3 operation.

<br/>

**`Example 2:`**

```
 function printAllPairs(n){
   for(let i=0; i<n; i++){
     for(let j=0; j<n; j++){
       console.log(`i and j = ${i} - ${j}`)
     }
   }
 }
```

Complexity is `O(n2)`
