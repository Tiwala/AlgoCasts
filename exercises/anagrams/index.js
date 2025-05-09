// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     // const s = stringA.replace(/[^a-z0-9]/gi, '');
//     // const t = stringB.replace(/[^a-z0-9]/gi, '');

//     const s = stringA.replace(/[^\w]/gi, '');
//     const t = stringB.replace(/[^\w]/gi, '');

//     if (s.length !== t.length) {
//         return false;
//     }

//     let obj = {};

//     for (let char of s) {
//         if (!obj[char]) {
//             obj[char] = 1;
//         } else {
//             obj[char]+= 1;
//         }
//     }

//     for (let char of t) {
//         if (!obj[char]) {
//             return false;
//         } else {
//             obj[char]-= 1;
//             if (obj[char] < 0) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
    return string.replace(/[^\w]/gi, '').split('').sort().join()
}

module.exports = anagrams;
