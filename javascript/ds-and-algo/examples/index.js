/**
 * Print number pairs
 * @param {*} n 
 */
function printPairs(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`i and j = ${i} - ${j}`)
    }
  }
}

//printNumerPyramid(5)

/**
 * Print number pyramid
 * @param {*} n 
 */

function printNumerPyramid(n) {
  for (let i = 0; i <= n; i++) {
    let s = '';
    for (let j = 0; j <= i; j++) {
      //console.log(`i and j = ${i} - ${j}`)
      s += j + ' '
      if (i == 5) {
        console.log(s);
      }
    }
    console.log('\n')
  }
}

//printNumerPyramid(5)


const arr = [6, 5, 8, 2, 9, 10, 4, 30, 12, 3]
function sortArr(arr) {
  const len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (arr[j] < arr[i]) {
        swapper(i, j)
      }
    }
  }
}

function swapper(i, j) {
  // let temp = arr[i];
  // arr[i] = arr[j];
  // arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
sortArr(arr);

console.log(arr)

