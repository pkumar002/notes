# Data types

Javascript has total `8` data types, divided into two category.

- Primitive Type ( Immutable )
- Reference Type ( Mutable)

## Primitive Values:

immutable datum represented directly at the lowest level of the language.

Once you declare, you can not change.

- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol

## Reference Type

- Object
- Array

<br/>

**`Boolean:`** <br/>
It represents a logical entity and can have two values `true` and `false`.

`Note:` The Boolean value is named after English mathematician `George Boole`, who pioneered the field of mathematical logic.

```
let enable=true;
let disable=false;
```

**`Null:`**<br/>
Null has exactly one value `null`. The value `null` represents the intentional absence of any object value. it treated as `falsy` for boolean operations.

Difference between `null` and `undefined`:

```
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```

**`Undefined:`**<br/>
It is a property of the global object. That is, it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined`.

- A variable that has not been assigned a value is of type undefined.
- A method or statement also returns undefined.
- A function returns undefined if a value was not returned.
- It is not a reserved word.

The global scope is bound to the `global object`, so checking the existence of a variable in the global context can be done by checking the existence of a property on the `global object`, using the `in` operator, for `instance`:

**`Example:`**

```
if ('x' in window) {
  //  these statements execute only if x is defined globally
}
```

| Property attributes of undefined |     |
| -------------------------------- | --- |
| Writable                         | no  |
| Enumerable                       | no  |
| Configurable                     | no  |
