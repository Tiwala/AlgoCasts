// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     // let result = '';

//     // for (let char of str) {
//     //     result = char + result;
//     // }

//     // return result;

//     return str.split('').reduce((reversed, char) => {
//         return char + reversed;
//     }, '');
// }

// reverse('asdf')


function reverse(str) {
    return str.split('').reduce((result, char) => {
        return char + result;
    }, '')
}



module.exports = reverse;
