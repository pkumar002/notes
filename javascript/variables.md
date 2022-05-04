# Vairables in javascript

`var` statement declares a function scope or globally scoped variable.

Example 1:

```
var x = 0;
console.log(x) // output 0
if (x === 0) {
  var x = 2;
  console.log(x) // output 2
}
console.log(x) // output 2, becouse var is function scoped not block scope
```

Example 2:

```
function abc() {
  var y = 0;
  console.log(y) // output 0
}
console.log(y) // ReferenceError, y is not declared
```

Example 3:

```
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x) // output 1
    console.log(y) // output 2
  }
  bar();
  console.log(x) // output 1
  console.log(y) // ReferenceError, y is not declared
}
foo();
```

\- A variable declared using var is added as a non-configurable property of the global object.

\- This means its property descriptor cannot be changed and it cannot be deleted, using delete.

\- The corresponding name is also added to a list on the internal [[VarNames]]

\- slot on the global environment record (which forms part of the global lexical environment)

\- The list of names in [[VarNames]] enable the runtime to distinguish between global variable and straightforward properties on the global object.

Example:

```
 'use strict';

 var a=1;
 globalThis.hashOwnProperty('a') // true
 delete globalThis.a // TypeError in strict mode, Fails silently otherwise
 delete a; // SyntaxError in strict mode, Fails silently otherwise
```

### Unqualified identifiers assignment:

The `global objects` sits on the top of the `scope` chain. When attemting to resolve a name to a value, the scope chain is searched.

Example: Non-strict mode

```
 a=0;
 console.log(a) // output 0
 globalThis.hasOwnProperty(a) // return true

```

Example: strict mode

```
'use strict';
 a=0;
 console.log(a) // output 0
 globalThis.hasOwnProperty(a) // return true

```

`Strict mode:` Throw a `ReferenceError`, a is not defiend,
to avoid the accidental creation of properties on the global object.

# What is hoisting

It is javascript default behavior.

Hoisting is a process of vertually moving the variable and function defination to the begining of the scope.

Javascript only hoist declaration, not the initialization

**`Node:`**

1. Function expression can not be hoist.
2. Anonymous function can not be hoist.
3. let and const can not be hoist, they are uninitialized (TDZ).
4. class can not be hoist

```
 Declaration –> Initialisation/Assignment –> Usage
```

Strictly hoisting consists in the idea that a variable is declared and initialized at the beginning of the function scope. There is no gap between declaration and initialization phases.

Example 1:

```
a=10
var a;
```

simple understood as: vertually hoisted like this

```
var a;
a=10;
```

Example 2:

```
console.log(a) // undefined value
a=10;
var a;
```

Simple understood as:

```
var a;
console.log(a) // undefined value
a=10; // assignment
```

Example 3:

```
console.log(y) // ReferenceError, there is no declration
y=10;
```

Declaring and initializing two variables:

`var a=1, b=2;`

Assigning two variables with single variable

`var a=1, var b=a;` is equavalent to `var a, b = a = 1;`

Be mindfull of the order

```
var a = b, b = 1;
```

understood as

```
 var a;
 var b;
 a=b;
 b=1;

 console.log(a+b) // undefined1
```

# Variable lefecycles:
