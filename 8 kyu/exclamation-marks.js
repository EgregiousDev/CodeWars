// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"

// My solution

function replace(s){
    return s.replace(/[aeiuoAEIUO]/g, '!')
  }
