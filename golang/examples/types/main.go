package main

import (
	"fmt"
	"reflect"
)

func main() {
	// int types

	var (
		num   int   = 10
		num8  int8  = 12
		num16 int16 = 16
		num32 int32 = 32
		num64 int64 = 64
	)

	fmt.Println(num, num8, num16, num32, num64)
	fmt.Println(reflect.TypeOf(num),reflect.TypeOf(num8),reflect.TypeOf(num16),reflect.TypeOf(num32),reflect.TypeOf(num64))
}
