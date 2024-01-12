// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution
function findAverage(array) {
    const sum = array.reduce((a,b) => a + b, 0)
    const average = (sum / array.length || 0)
    return average
  }
