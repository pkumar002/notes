<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number-type -->
<!-- https://www.toptal.com/firebase/role-based-firebase-authenticat -->

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

<br/>

## Number types

ECMAScript has two built-in numeric types: `Number` and `BigInt` — along with the related value `NaN`.

**`Number:`** <br/>

- The Number type is a `double-precision 64-bit binary format IEEE 754` value.
- It is capable of storing floating-point numbers between `2^-1074` and `2^1024`.
- Only safely store integers in the range -(`2^53 − 1`) to `2^53 − 1`.
- Value outside of the range `Number.MIN_VALUE` and `Number.MAX_VALUE` autometically converted to eighter `+Infinity` or `-Infinity`.

The number type has only one integer with multiple representations: `0` is represented as both `-0` and `+0` (where `0` is an alias for `+0`). In practice, there is almost no difference between the different representations; for example, `+0 === -0` is true. However, you are able to notice this when you divide by zero:

**`Example:`**

```
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

**`BigInt:`**
A `BigInt` is created by appending n to the end of an integer or by calling the constructor.
With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

You can obtain the largest safe value that can be incremented with Numbers by using the constant `Number.MAX_SAFE_INTEGER`. With the introduction of BigInts, you can operate with numbers beyond the `Number.MAX_SAFE_INTEGER.`

```
// BigInt
> const x = BigInt(Number.MAX_SAFE_INTEGER);
9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
false

// Number
> Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 === 9007199254740992
true
```
