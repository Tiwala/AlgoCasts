// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// const reversestring = require('../reversestring/index.js')

// function palindrome(str) {
//     let reversed = str.split('').reduce((reversed, char) => {
//         return char + reversed;
//     }, '');
    
//     return reversed === str;
// }

function palindrome(str) {
    let reversed = ''

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

module.exports = palindrome;
