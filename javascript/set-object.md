# Set

The Set object lets you store unique values of any type, whether primitive values or object references.

`NaN` and `undefined` can also be stored in a Set. All `NaN` values are equated (i.e. `NaN` is considered the same as `NaN`, even though NaN !== NaN).

## Set constructor

`Set():` create a new **Set** object that store unique values of any type

**`Syntax:`**

```
new Set()
new Set(iterable)
```

If an iterable object is passed, all of its elements will be added to the new Set.

**`Example:`**

```
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false

```
