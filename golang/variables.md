# Variables

A variable is a piece of storage containing data temporarily.

`var` keyword used to declare variable.

```
 var name type = expression
```

## Declare with initialization

```
 package main

 import "fmt"

 func main(){
   var name string = "pradeep"
   var age int = 10
   var isGratuate bool = true

   fmt.Println(name,age,isGraduate)
 }
```

## Declare without initialization

```
 package main

 import "fmt"

 func main(){
   var name string
   var age int
   var isGratuate bool

   name = "pradeep"
   age = 32
   isGraduate = true

   fmt.Println(name,age,isGraduate)
 }
```

## Declare with type inference

You can omit the variable type from the declaration, when you are assigning a value to a variable at the time of declaration.

```
package main

import (
  "fmt",
  "reflect"
)

func main(){
  var age = 10
  var name = "pradeep"

  fmt.Println(reflect.TypeOf(age))
  fmt.Println(reflect.TypeOf(name))
}
```

## Declaration of multiple variables

```
package main

import (
	"fmt"
)

func main() {
	var fname, lname string = "John", "Doe"
	m, n, o := 1, 2, 3
	item, price := "Mobile", 2000

	fmt.Println(fname + lname)
	fmt.Println(m + n + o)
	fmt.Println(item, "-", price)
}
```

## Short variable declaration

The := short variable assignment operator indicates that short variable declaration is being used.

```
package main

import (
	"fmt"
	"reflect"
)

func main() {
	name := "John Doe"
	fmt.Println(reflect.TypeOf(name))
}
```

## Scope of variables

Go lang uses lexical scoping based on code blocks to determine the scope of variables.
Inner block can access its outer block defined variables, but outer block can not access inner block defined variables.

A scope in Golang is the `region of a program where a defined variable can exist, and beyond that, a variable cannot be accessed`.

A variable can be defined in the `class`, `method`, `loop`

There are three places where the variables can be declared

- Local variables
- Global variables
- Formal parameters

**`Local Variables:`**

Local variables are those declared inside a function or a block. Local variables can be used only by statements that are inside that function or block of code.

`There will be a compile-time error if these variables are declared twice with the same name in the same scope`

**`Global Variables:`**

They hold their value throughout the program’s lifetime, and they can be accessed inside any of the functions defined for a program.

the variables which are defined outside of the function or a block is termed as Global variables.

Global variables are declared at the top of the program outside all of the functions or blocks.

```
// hello.go

package main

import "fmt"

/* global variable declaration */
var s int

func main() {
    /* local variable declaration */
    var r, h int

    /* actual initialization */
    r = 11
    h = 21
    s = r + h

    fmt.Printf("value of r = %d\n", r)
    fmt.Printf("value of h = %d\n", h)
    fmt.Printf("value of s = %d\n", s)
}
```

`Local and global variables are initialized to their default value, which is 0; Go Pointers are initialized to nil.`

## Variable declaration block

```
package main

import "fmt"

var (
	product  = "Mobile"
	quantity = 50
	price    = 50.50
	inStock  = true
)

func main() {
	fmt.Println(quantity)
	fmt.Println(price)
	fmt.Println(product)
	fmt.Println(inStock)
}
```

<br/>

# Constant variables

A `constant` is a name or an identifier for a fixed value. The value of a `variable` can vary, but the value of a constant must remain constant.

The keyword `const` is used for declaring constants.

**`Example:`**

```
package main

import "fmt"

const PRODUCT string = "Canada"
const PRICE = 500

func main() {
	fmt.Println(PRODUCT)
	fmt.Println(PRICE)
}
```

You must assign a value at the time of the `constant declaration`, you can't assign a value later as with variables.

## Multiple constants declaration block

```
package main

import "fmt"

const (
	PRODUCT  = "Mobile"
	QUANTITY = 50
	PRICE    = 50.50
	STOCK  = true
)

func main() {
	fmt.Println(QUANTITY)
	fmt.Println(PRICE)
	fmt.Println(PRODUCT)
	fmt.Println(STOCK)
}
```
