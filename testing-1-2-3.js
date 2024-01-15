// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// My solution
var number=function(array){
    let numberArr = []
    let count = 1
    for(let i = 0; i < array.length; i++){
      numberArr.push(`${count}: ${array[i]}`)
      count++
    }
    return numberArr
  }

// OR
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }