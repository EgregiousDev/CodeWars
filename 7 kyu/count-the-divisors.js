// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The 
// numbers between parentheses are shown only for you to see which 
// numbers are counted in each case.

//  My solution

function getDivisorsCnt(n){
    let count = 0
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        count++
      }
    }
    return count
  }

// Refactored because of timeout error

function getDivisorsCnt(n) {
    let count = 0
    for(let i = 1; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        // If i is a divisor, count it and also count its counterpart
        // For example, if i is 2 and n is 8, both 2 and 8/2 = 4 are divisors
        count += (i * i === n) ? 1 : 2
      }
    }
    return count
  }
