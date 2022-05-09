/**
 * Get sum of numbers
 * 1. Using for
 * 2. Using n*n+1/2
 * @param {*} num 
 * @returns 
 */
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

let t = performance.now();
console.log(sumOfNumbers(5))
let t1 = performance.now();

console.log(t1 - t)


function sumofNum(num) {
  return num * (num + 1) / 2
}

let t2 = performance.now();
console.log(sumofNum(5))
let t3 = performance.now();

console.log(t3 - t2)



/**
 * Factorial
 * 1. Using while
 * 2. Useing recursion
 */
function fact(num) {
  let mul = 1;
  if (num < 1) return;
  while (num > 0) {
    mul *= num;
    num--
  }
  return mul;
}
let t4 = performance.now();
console.log('fact', fact(5))
let t5 = performance.now();

console.log('fact - 1' + (t5 - t4))


function factRec(num) {
  if (num < 1) return 1;
  return num * factRec(num - 1)
}
let t6 = performance.now();
console.log('fact', factRec(5))
let t7 = performance.now();

console.log('fact - 1' + (t7 - t6))

