package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	var x int = 10

	fmt.Println(int16(x))
	fmt.Println(int32(x))
	fmt.Println(int64(x))
	fmt.Println(reflect.TypeOf(int64(x)))

    fmt.Println(float32(x))
    fmt.Println(float64(x) + 1.3)

    fmt.Println(reflect.TypeOf(strconv.FormatInt(int64(x),10)))

    
}
