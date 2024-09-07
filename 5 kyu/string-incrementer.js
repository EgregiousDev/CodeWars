// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// My solution
function incrementString(strng) {
    // Use regular expression to separate characters and numbers
    const match = strng.match(/([a-zA-Z]*)(\d*)$/);
  
    let characters = match[1] || ''; // Characters part
    let numbers = match[2] || '0'; // Numbers part (default to '0' if no numbers)
  
    // Increment the number part of the string
    let incrementedNumber = (parseInt(numbers) + 1).toString();
  
    // Add leading zeros if necessary
    while (incrementedNumber.length < numbers.length) {
      incrementedNumber = '0' + incrementedNumber;
    }
  
    // Join characters, the original characters after the numbers, and the incremented number
    return characters + strng.slice(characters.length, -numbers.length) + incrementedNumber;
  }
  
  
