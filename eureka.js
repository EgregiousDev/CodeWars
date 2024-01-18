// The number 89 is the first integer with more than one digit that 
// fulfills the property partially introduced in the title of this 
// kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89 = 8^1 + 9^2

// The next number in having this property is 135:
// 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [,]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [,] [a,b] the function should output an empty list.

// 90, 100 --> []

// My solution
function sumDigPow(a, b) {
    // Function to check if the sum of digits raised to consecutive powers is equal to the number
    function checkPowerSum(number){
      const strNumber = number.toString()
      let total = 0
      for(let i = 0; i < strNumber.length; i++){
        const digit = parseInt(strNumber[i])
        total += Math.pow(digit, i + 1)
      }
    return total === number
    }
    
    // Create a range of numbers based off input numbers
    let range = []
    for(let i = a; i <= b; i++){
      range.push(i)
    }
    
    // Loop through created range and if the number is input into the checkPowerSum function it returns true and gets added to the output array
    let output = []
    for(let i = 0; i < range.length; i++){
      if(checkPowerSum(range[i])){
         output.push(range[i])
         }
      }
    return output
  }