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

<br/>

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
