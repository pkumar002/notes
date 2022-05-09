# Big O Notation

Big O notation is one of the most fundamental tools for computer scientists to analyze the cost of an `algorithm`.

Big O notation describes the `complexity` of your code using algebraic terms.

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
- Let's cont the `number of operations` the computer has to perform!.

`**Solution 1:`\*\*
It has `5n+2` operation.

- sum=0 => 1 operation.
- let i=0 => 1 operation.
- sum+= => n additions, n assignments.
- i++ => n additions and n assignments.
- i<=n => n comparisions

the complexity is `O(5n)`, 

`**Solution 2:`\*\*
It has 3 operation

1. Multilication.
2. Addition.
3. Division.

Complexity is `O(1)`, always 3 operation.

<br/>

**`Notations:`**

1. `f(n)` could be linear (f(n)=n).
2. `f(n)` could be quadratic (f(n)=n2).
3. `f(n)` could be constant (f(n)=1).
4. `f(n)` could be someting entirely different.

<br/>

**`What does better mean?`**

- Faster?.
- Less memory-intensive?.
- More readable?.

```

```
