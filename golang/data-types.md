# Data types in go

Go is statically typed, meaning that once a variable type is defined, it can only store data of that type.

\- `Basic Types:=>` `Numbers`, `Strings`, and `Booleans` comes under this category.

\- `Aggregate type:=>` `Array` and `structs` come under this category.

\- `Reference type:=>` `Pointers`, `slices`, `maps`, `functions` and `channels` come under this category.

\- `Interface type:=>`

<br/>

**`Go has five keywords/types of signed integers:`**

| Type   | Size                                                                 | Range                                                         |
| ------ | :------------------------------------------------------------------- | ------------------------------------------------------------- |
| int    | Depends on platform: 32 bits in bit system and 64 bit 64 bit systems | -2147483648 to 2147483647 in 32 bit systems and               |
|        |                                                                      | -9223372036854775808 to 9223372036854775807 in 64 bit systems |
| int8   | 8 bits/1 byte                                                        | -128 to 127                                                   |
| int16  | 16 bits/2 byte                                                       | -32768 to 32767                                               |
| init32 | 32 bits/4 byte                                                       | -2147483648 to 2147483647                                     |
| init64 | 64 bits/8 byte                                                       | -9223372036854775808 to 9223372036854775807                   |

# Numbers

Numbers are divided into three sub-categories

1. Integers
2. Floating point
3. Complex Numbers

<br/>

## Integers

| Data Type | Description                                                                                                |
| --------- | :--------------------------------------------------------------------------------------------------------- |
| int8      | 8-bit signed integer                                                                                       |
| int16     | 16-bit signed integer                                                                                      |
| int32     | 32-big singed integer                                                                                      |
| int64     | 64-big singed integer                                                                                      |
| uint8     | 8-big unsinged integer                                                                                     |
| uint16    | 16-big unsinged integer                                                                                    |
| uint32    | 32-big unsinged integer                                                                                    |
| uint64    | 64-big unsinged integer                                                                                    |
| int       | Both unit and init contains same size, either 32 or 64 bit                                                 |
| uint      | Both unit and init contains same size, either 32 or 64 bit                                                 |
| rune      | it is a synonym of nit32 also represent unicode code points                                                |
| byte      | It is a synonym of unit8                                                                                   |
| uintptr   | It is an unsigned integer type. its width is not defined, but its can hold all the bits of a pointer value |

**Example:**

```
package main

import "fmt"

func main(){

 // Using 8-bit unsigned int
var X unit8 = 255;
fmt.Println(X,X-3)

// Using 16-bit signed int
    var Y int16 = 32767
    fmt.Println(Y+2, Y-2)
}
```

**Output**:

225 222

-32767 32765

<br/>

## Floating-Point Numbers

In Go language, floating-point numbers are divided into two categories as shown in the below table:

| Data Type | Description                           |
| --------- | :------------------------------------ |
| float32   | 32-bit IEEE 754 floating-point number |
| float64   | 64-bit IEEE 754 floating-point number |

```
package main
import "fmt"

func main() {
	a := 20.45
	b := 34.89

	// Subtraction of two
	// floating-point number
	c := b-a

	// Display the result
	fmt.Printf("Result is: %f", c)

	// Display the type of c variable
	fmt.Printf("\nThe type of c is : %T", c)
}

```

**Output: **

Result is: 14.440000

The type of c is : float64

<br/>

## Complex Numbers:

The complex numbers are divided into two parts

| Data Type  | Description                                                              |
| ---------- | :----------------------------------------------------------------------- |
| complex64  | Complex numbers which contain float32 as a real and imaginary component. |
| complex128 | Complex numbers which contain float32 as a real and imaginary component. |

```
package main
import "fmt"

func main() {

   var a complex128 = complex(6, 2)
   var b complex64 = complex(9, 2)
   fmt.Println(a)
   fmt.Println(b)

   // Display the type
  fmt.Printf("The type of a is %T and "+
            "the type of b is %T", a, b)
}
```

**Output:**

(6+2i)

(9+2i)

The type of a is complex128 and the type of b is complex64

<br/>

# `Type conversion`

The process of converting a value from on data type to another is known as type conversion.

**`1: Convert int to int16,int32,int64: =>`**

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var i int = 10
	fmt.Println(reflect.TypeOf(i))

	i16 := int16(i)
	fmt.Println(reflect.TypeOf(i16))

	i32 := int32(i)
	fmt.Println(reflect.TypeOf(i32))

	i64 := int64(i)
	fmt.Println(reflect.TypeOf(i64))
}
```

**`2: Converting Int to Float: =>`**

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var f32 float32 = 10.6556
	fmt.Println(reflect.TypeOf(f32))

	i32 := int32(f32)
	fmt.Println(reflect.TypeOf(i32))
	fmt.Println(i32)

	f64 := float64(i32)
	fmt.Println(reflect.TypeOf(f64))
}
```

**`3: Converting Int to String:=>`**

You can use the strconv package's FormatInt() function to convert the int into an string value. FormatInt returns the string representation of i in the given base, for 2 <= base <= 36. The result uses the lower-case letters 'a' to 'z' for digit values >= 10.

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	var i int64 = 125
	fmt.Println(reflect.TypeOf(i))
	fmt.Println(i)

	var s string = strconv.FormatInt(i, 10)
	fmt.Println(reflect.TypeOf(s))

	fmt.Println("Base 10 value of s:", s)

	s = strconv.FormatInt(i, 8)
	fmt.Println("Base 8 value of s:", s)

	s = strconv.FormatInt(i, 16)
	fmt.Println("Base 16 value of s:", s)

	s = strconv.FormatInt(i, 32)
	fmt.Println("Base 32 value of s:", s)
}
```

**`4: Converting Float to String:=>`**

**`SYNTAX:`** _`func FormatFloat(f float64, fmt byte, prec, bitSize int) string`_

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	var f float64 = 3.1415926535
	fmt.Println(reflect.TypeOf(f))
	fmt.Println(f)

	var s string = strconv.FormatFloat(f, 'E', -1, 32)
	fmt.Println(reflect.TypeOf(s))
	fmt.Println(s)
}
```

**`5: Convert Float32 to Float64 and Float64 to Float32:=>`**

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
)

func main() {
	var f32 float32 = 10.6556
	fmt.Println(reflect.TypeOf(f32))

	f64 := float64(f32)
	fmt.Println(reflect.TypeOf(f64))

	f64 = 1097.655698798798
	fmt.Println(f64)

	f32 = float32(f64)
	fmt.Println(f32)
}
```

**`6: Converting string to Int:=>`**

You can use the strconv package's Atoi() function to convert the string into an integer value.

Atoi stands for ASCII to integer. The Atoi() function returns two values: the result of the conversion, and the error (if any).

**`Syntax:`**

```
func Atoi(s string) (int, error)
```

**`Example:`**

```
package main

import (
	"fmt"
	"strconv"
	"reflect"
)

func main() {
	strVar := "100"
	intVar, err := strconv.Atoi(strVar)
	fmt.Println(intVar, err, reflect.TypeOf(intVar))
}
```

**`7: String to int:=> `**

`ParseInt` interprets a `string s` in the given base `(0, 2 to 36)` and bit size `(0 to 64)` and returns the corresponding value i.

This function accepts a string parameter, convert it into a corresponding int type based on a base parameter. By default, it returns `Int64` value.

**`Syntax:`**

```
func ParseInt(s string, base int, bitSize int) (i int64, err error)
```

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	strVar := "100"

	intVar, err := strconv.ParseInt(strVar, 0, 8)
	fmt.Println(intVar, err, reflect.TypeOf(intVar))

	intVar, err = strconv.ParseInt(strVar, 0, 16)
	fmt.Println(intVar, err, reflect.TypeOf(intVar))

	intVar, err = strconv.ParseInt(strVar, 0, 32)
	fmt.Println(intVar, err, reflect.TypeOf(intVar))

	intVar, err = strconv.ParseInt(strVar, 0, 64)
	fmt.Println(intVar, err, reflect.TypeOf(intVar))
}
```

<br/>

**`8: Convert string to float:=>`**

ParseFloat converts the string s to a floating-point number with the precision specified by bitSize: 32 for float32, or 64 for float64. When bitSize=32, the result still has type float64, but it will be convertible to float32 without changing its value.

**`Syntax:`**

```
func ParseFloat(s string, bitSize int) (float64, error)
```

**`Example:`**

```
package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	s := "3.1415926535"
	f, err := strconv.ParseFloat(s, 8)
	fmt.Println(f, err, reflect.TypeOf(f))

	s1 := "-3.141"
	f1, err := strconv.ParseFloat(s1, 8)
	fmt.Println(f1, err, reflect.TypeOf(f1))

	s2 := "A-3141X"
	f2, err := strconv.ParseFloat(s2, 32)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(f2, err, reflect.TypeOf(f2))
	}
}
```

<br/>

**`9: String to Boolean:=>`**

Package strconv is imported to perform conversions to and from string.ParseBool returns the boolean value represented by the string. It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Any other value returns an error.

**`Syntax:`**

```
fun ParseBool(type)
```

**`Example:`**

```
package main

import (
	"fmt"
	"strconv"
)

func main() {
	s1 := "true"
	b1, _ := strconv.ParseBool(s1)
	fmt.Printf("%T, %v\n", b1, b1)

	s2 := "t"
	b2, _ := strconv.ParseBool(s2)
	fmt.Printf("%T, %v\n", b2, b2)

	s3 := "0"
	b3, _ := strconv.ParseBool(s3)
	fmt.Printf("%T, %v\n", b3, b3)

	s4 := "F"
	b4, _ := strconv.ParseBool(s4)
	fmt.Printf("%T, %v\n", b4, b4)
}
```
