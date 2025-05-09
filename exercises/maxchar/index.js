// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let map = new Map();

//     for (let char of str) {
//         if (map.has(char)) {
//             map.set(char, (map.get(char) + 1));
//         } else {
//             map.set(char, 1);
//         }
//     }

//     let maxChar = '';
//     let maxNum = 0;

//     for (let [char, count] of map) {
//         if (count > maxNum) {
//             maxNum = count;
//             maxChar = char
//         }
//     }

//     return maxChar;
// }

function maxChar(str) {
    let map = new Map;

    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let maxChar = '';
    let maxNum = 0;

    for (let [char, count] of map) {
        if (maxNum < count) {
            maxNum = count;
            maxChar = char;
        }
    }

    return maxChar;

}
module.exports = maxChar;
