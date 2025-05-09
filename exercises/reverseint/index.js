// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const string = n.toString();
    // console.log(string)
    let reversedString = '';

    for (let char of string) {
        reversedString = char + reversedString;
    }

    return Math.sign(n) * parseInt(reversedString);
}


module.exports = reverseInt;
