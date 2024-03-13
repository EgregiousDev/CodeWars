// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution

function fakeBin(x){
    let fake = ''
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5){
        fake+= 0
      }else if(x[i] >= 5){
        fake+= 1
      }
    }
    return fake
  }


// Refactored

function fakeBin(x){
    return x.replace(/\d/g, d => d < 5 ? 0 : 1)
}
