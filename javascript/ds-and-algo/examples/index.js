/**
 * Print all pairs
 * @param {*} n 
 */

function printAllPairs(n) {
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

printAllPairs(5)