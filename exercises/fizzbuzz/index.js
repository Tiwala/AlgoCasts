// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function modulo(a, b) {
    let quotient = parseInt(a/b);
    return a - (quotient * b);
}

function fizzBuzz(n) {
    // for(let i = 1; i <= n; i++) {
    //     if (modulo(i, 15) === 0) {
    //         console.log('fizzbuzz')
    //     } else if (modulo(i, 5) === 0) {
    //         console.log('buzz');
    //     } else if (modulo(i, 3) === 0) {
    //         console.log('fizz');
    //     } else {
    //         console.log(i);
    //     }
    // }

    for(let i = 1; i <= n; i++) {
        let result = '';
        modulo(i, 3) === 0 ? result += 'fizz': '';
        modulo(i, 5) === 0 ? result += 'buzz': '';
        result = result || i

        console.log(result);
    }
}

module.exports = fizzBuzz;
