const root = document.getElementById("root");
const input = document.getElementById("input");
const button = document.getElementById("button");

let count = 0;

// random number
let randomNumber = Math.floor((Math.random() * 100) + 1)

// event handler
button.addEventListener("click", guessNumber);

function guessNumber() {
  if (count < 10) {
    if (+input.value === randomNumber) {
      count = 0;
      const p = document.createElement("p");
      const pText = document.createTextNode("You have won!")
      p.style = 'color:green; font-size:20px'
      p.append(pText);
      root.append(p)
    }
    else {
      count++
      console.log(randomNumber)
    }
  } else {
    const error = document.getElementById("error")
    if (error) {
      return;
    }
    const p = document.createElement("p");
    const pText = document.createTextNode("You have lost your all lives.")
    p.id = "error"
    p.style = 'color:red;'
    p.appendChild(pText);
    root.append(p)
  }
}