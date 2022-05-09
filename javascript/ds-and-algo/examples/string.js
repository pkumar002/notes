const str = 'Hello World';
// input strig and reverse it
function revString(str) {
  return str.split('').reverse().join('')
}
console.log(revString(str))



function revString1(str) {
  let arr = ""
  const len = str.length - 1;
  for (let i = len; i >= 0; i--) {
    arr += str[i]
  }
  return arr
}
console.log(revString1("Hello World"))