# Function

A function is a group of statements that exist within a program for the purpose of performing a specific task. At a high level, a function takes an input and returns an output.

Function allows you to extract commonly used block of code into a single component.

The single most popular Go function is main(), which is used in every independent Go program.

# How to declare a function

```
func main(){
  // code that you want to print
}
```

### Return function with type string

```
func name() string{
  return "Pradeep Kumar"
}
```

### Return function with type int

```
func name() int{
  return 1988
}
```

### Return function with type bool

```
func name() bool {
  return true
}
```

### Simple function with parameters in Golang

```
func main(){
  fmt.Println(add(10,20))
}

func add(x int, y int) {
	total := 0
	total = x + y
	fmt.Println(total)
}
```

### Simple function with return value

```
package main

import "fmt"

// Function with int as return type
func add(x int, y int) int {
	total := 0
	total = x + y
	return total
}

func main() {
	// Accepting return value in varaible
	sum := add(20, 30)
	fmt.Println(sum)
}
```

#### The return values of a function can be named

```
package main

import "fmt"

func rectangle(l int, b int) (area int) {
	var parameter int
	parameter = 2 * (l + b)
	fmt.Println("Parameter: ", parameter)

	area = l * b
	return // Return statement without specify variable name
}

func main() {
	fmt.Println("Area: ", rectangle(20, 30))
}
```

**Output:**

Parameter: 100

Area: 600

<br/>

### Functions Returning Multiple Values

```
package main

import "fmt"

func rectangle(l int, b int) (area int, parameter int) {
	parameter = 2 * (l + b)
	area = l * b
	return // Return statement without specify variable name
}

func main() {
	var a, p int
	a, p = rectangle(20, 30)
	fmt.Println("Area:", a)
	fmt.Println("Parameter:", p)
}
```

### Passing address to a function

```
func update(a *int, t *string) {
	*a = *a + 5      // defrencing pointer address
	*t = *t + " Doe" // defrencing pointer address
	return
}

func main() {
	var age = 20
	var text = "John"
	fmt.Println("Before:", text, age)

	update(&age, &text)

	fmt.Println("After :", text, age)
}
```

### Anonymous Functions

```
var (
	area = func(l int, b int) int {
		return l * b
	}
)

func main() {
	fmt.Println(area(20, 30))
}
```

Passing arguments to annonymous function

```
func main() {
	func(l int, b int) {
		fmt.Println(l * b)
	}(20, 30)
}
```

### Closures Functions

```
func main() {
	l := 20
	b := 30

	func() {
		var area int
		area = l * b
		fmt.Println(area)
	}()
}
```

Anonymous function accessing the variable defined outside body.

### Higher Order Functions

A Higher-Order function is a function that receives a function as an argument or returns the function as output.

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

```
func sum(x, y int) int {
	return x + y
}
func partialSum(x int) func(int) int {
	return func(y int) int {
		return sum(x, y)
	}
}
func main() {
	partial := partialSum(3)
	fmt.Println(partial(7))
}
```

### Returning Functions from other Functions

```
func squareSum(x int) func(int) func(int) int {
	return func(y int) func(int) int {
		return func(z int) int {
			return x*x + y*y + z*z
		}
	}
}
func main() {
	// 5*5 + 6*6 + 7*7
	fmt.Println(squareSum(5)(6)(7))
}
```

**Output:** 110

### User Defined Function Types

```
package main

import "fmt"

type First func(int) int
type Second func(int) First

func squareSum(x int) Second {
	return func(y int) First {
		return func(z int) int {
			return x*x + y*y + z*z
		}
	}
}

func main() {
	// 5*5 + 6*6 + 7*7
	fmt.Println(squareSum(5)(6)(7))
}
```

# Variadic Functions

A variadic function is a function that accepts a variable number of arguments. In Golang, it is possible to pass a varying number of arguments of the same type as referenced in the function signature. To declare a variadic function, the type of the final parameter is preceded by an ellipsis, "...", which shows that the function may be called with any number of arguments of this type. This type of function is useful when you don't know the number of arguments you are passing to the function, the best example is built-in Println function of the fmt package which is a variadic function.

**`Example 1:`**

```
package main

import "fmt"

func main() {
	variadicExample("red", "blue", "green", "yellow")
}

func variadicExample(s ...string) {
	fmt.Println(s[0])
	fmt.Println(s[3])
}
```

**`Output:`** red, yellow

### Passing multiple string arguments to a variadic function

The parameter s accepts an infinite number of arguments. The tree-dotted ellipsis tells the compiler that this string will accept, from zero to multiple values.

**`Example:` **

```
package main

import "fmt"

func main() {

	variadicExample()
	variadicExample("red", "blue")
	variadicExample("red", "blue", "green")
	variadicExample("red", "blue", "green", "yellow")
  }

func variadicExample(s ...string) {
	fmt.Println(s)
}
```

**`Output:`**

[]<br/>
[red blue]<br/>
[red blue green]<br/>
[red blue green yellow]

<br/>

### Normal function parameter with variadic function parameter

<br/>

**`Example:`**

```
package main

import "fmt"

func main() {
	fmt.Println(calculation("Rectangle", 20, 30))
	fmt.Println(calculation("Square", 20))
}

func calculation(str string, y ...int) int {

	area := 1

	for _, val := range y {
		if str == "Rectangle" {
			area *= val
		} else if str == "Square" {
			area = val * val
		}
	}
	return area
}
```

<br/>

# Deferred Functions Calls

Go has a special statement called defer that schedules a function call to be run after the function completes.

<br/ >

**`Example:`**

```
package main
import "fmt"
func first() {
	fmt.Println("First")
}
func second() {
	fmt.Println("Second")
}
func main() {
	defer second()
	first()
}
```

A defer statement is often used with paired operations like open and close, connect and disconnect, or lock and unlock to ensure that resources are released in all cases, no matter how complex the control flow. The right place for a defer statement that releases a resource is immediately after the resource has been successfully acquired.

### `This has various advantages:`

- It keeps our Close call near our Open call so it's easier to understand.
- If our function had multiple return statements (perhaps one in an if and one in an else), Close will happen before both of them.
- Deferred Functions are run even if a runtime panic occurs.
- Deferred functions are executed in LIFO order, so the above code prints: 4 3 2 1 0.
- You can put multiple functions on the "deferred list", like this example.

**`Example:`**

```
package main
import "fmt"
func main() {
	for i := 0; i < 5; i++ {
		defer fmt.Printf("%d ", i)
	}

```
