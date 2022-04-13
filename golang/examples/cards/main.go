package main

import (
	"fmt"
)


var num int =10

func main() {
	// cards := deck{"Dilip", "Pradeep", "Sanjeev", "Arun"}
	// cards = append(cards, "Sukanya")
	// cards.print()

	var (
		hello = func(){
		var name string = "Pradeep";
		fmt.Println(name)
	}
	)

	hello()
	fmt.Println(num)

}
